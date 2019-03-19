import React, { Component } from 'react';
import CodeBox from '../frame/CodeBox';
class Toast extends Component {
  state = {
    valArr: [
      {
        title: '普通提示',
        content: '信息提醒反馈',
        code: 
          '<div class="toast">\n' +
          '  提示文案提示\n' +
          '</div>'
      }
    ],
  }
  render() {
    return (
      <div>
        <div className="component-des">
          <h1>Toast 提示</h1>
          <p>全局展示简易的操作反馈信息</p>
          <h2>何时使用</h2>
          <ul>
            <li>可提供成功、警告和错误等反馈信息</li>
            <li>一般情顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。</li>
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

export default Toast