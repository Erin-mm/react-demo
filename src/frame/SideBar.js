import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
import pages from '../json/page.json'
import components from '../json/component.json'

const { SubMenu } = Menu;
class SideBar extends Component {
  state = {
    defaultSelectedKeys: ['0']
  }
  componentWillMount() {
    this.getDefault();
  }
  getDefault() {
    const sideItem = this.props.name.substr(1).split('/').pop()
    components.map((section, index) => {
      if (section.name === sideItem) {
        this.setState({
          defaultSelectedKeys: [section.key]
        });
      }
      return false
    }
    )
  }
  render() {
    return (

      <Menu
        mode="inline"
        defaultSelectedKeys={this.state.defaultSelectedKeys}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        {
          this.props.name.match(RegExp(/\/page/)) ?
            pages.map((section, index) =>
              <SubMenu key={index} title={<span><Icon type="bars" />{section.title}</span>}>
                {
                  section.children.map((item, i) =>
                    <Menu.Item key={index + '-' + i} >
                      <Link to={`/page/${item.page}`}>{item.title}</Link>
                    </Menu.Item>
                  )
                }
              </SubMenu>
            )
            :
            components.map((section, index) =>
              <Menu.Item key={index}>
                <Link to={`/components/${section.name}`}>{section.title}</Link>
              </Menu.Item>
            )

        }
      </Menu>
    )
  }
}

export default SideBar