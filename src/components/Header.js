import React, { Component } from 'react';
import CodeBox from '../frame/CodeBox';
class Header extends Component {
  state = {
    defaultSelectedKeys: ['0'],
    valArr: [
      {
        title: '一般情况',
        content: '左侧是返回操作，中间是标题',
        code: '<div class="m-header whitebg">\n' +
          '    <div class="wrapper">\n' +
          '        <div class="nav-left">\n' +
          '            <span class="btn-nav-back"></span>\n' +
          '        </div>\n' +
          '        <div class="header-content">\n' +
          '            <h1 class="heading">标题</h1>\n' +
          '        </div>\n' +
          '    </div>\n' +
          '</div>\n'
      },
      {
        title: '含有操作',
        content: '适用于右侧有操作的情况',
        code: '<div class="m-header whitebg">\n' +
          '    <div class="wrapper">\n' +
          '        <div class="nav-left">\n' +
          '            <span class="btn-nav-back"></span>\n' +
          '        </div>\n' +
          '        <div class="header-content">\n' +
          '            <h1 class="heading">标题</h1>\n' +
          '        </div>\n' +
          '        <div class="nav-right">\n' +
          '            <span class="btn-nav-txt-blue">删除</span>\n' +
          '        </div>\n' +
          '    </div>\n' +
          '</div>\n'
      },
      {
        title: '含有多项操作',
        content: '适用于右侧有多项操作的情况',
        code: '<div class="m-header whitebg">\n' +
          '    <div class="wrapper">\n' +
          '        <div class="nav-left">\n' +
          '            <span class="btn-nav-txt base">取消</span>\n' +
          '        </div>\n' +
          '        <div class="header-content">\n' +
          '            <h1 class="heading">标题</h1>\n' +
          '        </div>\n' +
          '        <div class="nav-right">\n' +
          '            <span class="btn-nav-txt-white spec"> …</span>\n' +
          '        </div>\n' +
          '    </div>\n' +
          '</div>\n'
      },
      {
        title: '关闭页面',
        content: '左侧含有关闭按钮，适用于关闭整个模块的操作',
        code: '<div class="m-header whitebg">\n' +
          '    <div class="wrapper">\n' +
          '        <div class="nav-left">\n' +
          '            <span class="btn-nav-back"></span>\n' +
          '        </div>\n' +
          '        <div class="nav-close">\n' +
          '            <i class="icon-ins icon-ins-close"></i>\n' +
          '        </div>\n' +
          '        <div class="header-content">\n' +
          '            <h1 class="heading">标题</h1>\n' +
          '        </div>\n' +
          '    </div>\n' +
          '</div>\n'
      }
    ]
  }
  render() {
    return (
      <div>
        <div className="component-des">
          <h1>Header 导航头</h1>
          <p>固定在页面顶端的导航，包括引导、页面跳转和部分简单操作。</p>
          <h2>何时使用</h2>
          <ul>
            <li>一般情况下都会出现</li>
          </ul>
          <h2>代码演示</h2>
        </div>
        {
          this.state.valArr.map((section, index) =>
            <CodeBox value={section} key={index}></CodeBox>
          )
        }
      </div>
    )
  }
}

export default Header