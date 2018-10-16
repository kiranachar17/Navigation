import React, { Component } from 'react';
import LoginForm from './LoginForm';

import './LoginPage.css';

class LoginPage extends Component {
  render() {
    return (

      <div className="LoginPage">
      <h3> Girmiti Software </h3>
      
        <LoginForm />

      </div>
    );
  }
}

export default LoginPage;