import React, { Component } from 'react';

import { Icon } from 'antd';

import LoginForm from './LoginForm';

import './style.css';

export default class Login extends Component {
  render(){
    return(
      <div className="login-container">
        <Icon type="arrow-left" className="back-icon" onClick={() => this.props.history.goBack()}/>
        <div className="login-title">
          <h1>Login</h1>
        </div>
        <LoginForm />
      </div>
    )
  }
}

