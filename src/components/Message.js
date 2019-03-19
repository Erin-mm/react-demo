import React, { Component } from 'react';
import CodeBox from '../frame/CodeBox';
class Message extends Component {
  state = {
    valArr: [
      {
        title: '普通提示',
        content: '信息提醒反馈',
        code:
          '<div class="msgbox">\n' +
          '    <div class="msgbox-header">\n' +
          '      <div class="msgbox-header-title">标题</div>\n' +
          '    </div>\n' +
          '    <!-- 如无内容直接隐去即可 -->\n' +
          '    <div class="msgbox-content">\n' +
          '      <div class="msgbox-content-message">描述文字尽量控制在两行内</div>\n' +
          '    </div>\n' +
          '    <div class="msgbox-btns">\n' +
          '      <!-- 如只有一个btn直接隐去即可 -->\n' +
          '      <div class="msgbox-btn msgbox-btn-assist">辅助操作</div>\n' +
          '      <div class="msgbox-btn msgbox-btn-main">主操作</div>\n' +
          '    </div>\n' +
          '  </div>'
      }
    ],
  }
  render() {
    return (
      <div>
        <div className="component-des">
          <h1>Message Box 弹框</h1>
          <p>模态对话框</p>
          <h2>何时使用</h2>
          <ul>
            <li>打断用户操作流，获取用户视觉焦点，一般出现在屏幕中心位置，会对界面进行遮挡</li>
            <li>需要用户在处理完弹框事物之后，才能进行后续操作</li>
            <li>内容重要性较强，一般需要用户根据提示进行判断</li>
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

export default Message