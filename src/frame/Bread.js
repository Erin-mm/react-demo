import React, { Component } from 'react'
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom'

class Bread extends Component {

  render() {
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        {
          this.props.name.substr(1).split('/').map((section, index) =>
            <Breadcrumb.Item key={index}>
              <Link to={`/components/${section}`}>{section}</Link>
            </Breadcrumb.Item>
          )
        }
         {/* <iframe title="mainCon" src={`./platform_app/${this.props.location.pathname.substr(1).split('/')[1]}.html`}></iframe> */}
      </Breadcrumb>
    )
  }
}

export default Bread