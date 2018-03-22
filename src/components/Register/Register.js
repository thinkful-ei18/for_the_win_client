import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header';
import RegisterForm from './RegisterForm';

import './register.css';


export default class Register extends Component {

  render() {

    return (
      <div className='register'>
          <div className='navBar'>
            <Link
              to='/login'
              className='loginLink'
            >
              Login
            </Link>
            <Link
              to='/register'
              className='registerLink'
            >
              Register
            </Link>
          </div>
        <Header />
        <RegisterForm />
      </div>
    );
  }
}
