import React, { Component } from 'react';
import { LoginWrapper,InputWrapper } from './style.js'
class index extends Component {
  render() {
    return (
        <LoginWrapper>
          <InputWrapper>
          <input type="text" placeholder="账号" />
          <input type="password" placeholder="密码" />
          <button>登录</button>
          </InputWrapper>
          
        </LoginWrapper>
    );
  }
}

export default index;