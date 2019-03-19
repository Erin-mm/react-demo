import React, { Component } from 'react';
class PageLayout extends Component {
  state = {
    src: './platform_app/' + this.props.match.params.id + '.html'
  }
  render() {
    return (
      <div className="page-con">
        <div className="left">
          <iframe title="mainCon" src={this.state.src}></iframe>
          {this.state.src}
          {/* <iframe title="mainCon" src={`./platform_app/${this.props.location.pathname.substr(1).split('/')[1]}.html`}></iframe> */}
        </div>
        <div className="right"></div>
      </div>
    )
  }
}

export default PageLayout