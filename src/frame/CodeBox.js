import React, { Component } from 'react'
import { Icon, message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Highlight from 'react-highlight'
import IconCode from '../components/IconCode'
import '../../node_modules/highlight.js/styles/atelier-cave-light.css'

const IconCodeShow = IconCode.IconCodeShow
const IconCodeHide = IconCode.IconCodeHide
  ;
class CodeBox extends Component {
  state = {
    codeShow: false
  }
  componentDidMount() {
  }
  handleClick(codeShow) {
    this.setState(prevState => ({
      codeShow: !prevState.codeShow
    }));
  }
  handleCopy() {
    message.success('copied!')
  }
  render() {
    return (
      <div className="code-box">
        <div className="code-box-demo">
          <div dangerouslySetInnerHTML={{ __html: this.props.value.code }}></div>
        </div>
        <div className="code-box-text">
          <span className="title">{this.props.value.title}</span>
          <p className="content">{this.props.value.content}</p>
          {
            this.state.codeShow ?
              <IconCodeHide style={{ color: 'grey', fontSize: '20px' }} onChange={() => this.handleClick()} />
              :
              <IconCodeShow style={{ color: 'grey', fontSize: '20px' }} onChange={() => this.handleClick()} />
          }
        </div>
        {
          this.state.codeShow ?
            <div className="code-box-code">
              <Highlight>
                {this.props.value.code}
              </Highlight>
              <CopyToClipboard text={this.props.value.code}
                onCopy={() => this.handleCopy()}>
                <Icon type="copy" />
              </CopyToClipboard>

            </div>
            :
            ''
        }

      </div>

    )
  }
}

export default CodeBox