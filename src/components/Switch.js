import React, { Component } from 'react';
import CodeBox from '../frame/CodeBox';
class Switch extends Component {
  state = {
    valArr: [
      {
        title: '基本',
        content: '基本用法',
        code:
          ' <label class="field-switch">\n' +
          '        <input type="checkbox" class="field-switch-input" checked="">\n' +
          '        <span class="field-switch-core"></span>\n' +
          '</label>'
      },
      {
        title: '禁用',
        content: 'switch不可用',
        code:
          ' <label class="field-switch">\n' +
          '        <input type="checkbox" class="field-switch-input" disabled>\n' +
          '        <span class="field-switch-core"></span>\n' +
          '</label>'
      }
    ]
  }
  render() {
    return (
      <div>
        <div className="component-des">
          <h1>Switch 开关</h1>
          <p></p>
          <h2>何时使用</h2>
          <ul>
            <li>适用于表单中某个功能的开启和关闭</li>
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

export default Switch