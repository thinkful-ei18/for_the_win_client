import React, { Component } from 'react';

import RegisterForm from './RegisterForm';

import './register.css';


export default class Register extends Component {

  render() {

    return (
      <div className='register'>
        <RegisterForm />
      </div>
    );
  }
}
