import React, { Component } from 'react';

import { Icon } from 'antd';

import './style.css';

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <div className="email-box">
          <label className="email-label">E-mail</label>
          <input className="email-input" placeholder="someone@example.com"/>
        </div>
        <div className="password-box">
          <label className="email-label">Password</label>
          <div className="password">
            <input className="email-input" />
            <Icon type="eye" className="eye-icon"/>
          </div>
        </div>
        <div className="login-btn-container">
          <button className="login-button">
            Login
          </button>
        </div>
        <div className="forget-password">
          <button className="forget-password-btn" >Forget Your Password ?</button>
        </div>
      </div>
    )
  }
}
