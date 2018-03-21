import React, { Component } from 'react';

import Header from '../Header';
import RegisterForm from './RegisterForm';

import './register.css';


export default class Register extends Component {

  render() {

    return (
      <div className='register'>
        <Header />
        <RegisterForm />
      </div>
    );
  }
}
