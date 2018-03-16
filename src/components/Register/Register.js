import React, { Component } from 'react';

// import Header from './Header';
import RegisterForm from './RegisterForm';
// import Button from './Button';

import './register.css';

export default class Register extends Component {

  render() {

    return (
      <div className='register'>
        <h1>Register</h1>
        <RegisterForm />
      </div>
    );
  }
}
