import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import './assets/scss/App.scss';
import SideBar from './frame/SideBar'
import Bread from './frame/Bread'

const { Header, Content, Sider } = Layout;
class App extends Component {
  state = {
    showKey: ['1']
  }
  componentDidMount() {
    // const route = this.props.location.pathname.
  }
  changeFun = ({ key }) => {
    this.setState({
      showKey: [key]
    });
  }
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={this.state.showKey}
            style={{ lineHeight: '64px' }}
            onClick={this.changeFun}
          >
            <Menu.Item key="1"><Link to="/components">Components</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/page">Pages</Link></Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <SideBar name={this.props.location.pathname}></SideBar>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Bread name={this.props.location.pathname}>
            </Bread>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              {renderRoutes(this.props.route.routes)}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
