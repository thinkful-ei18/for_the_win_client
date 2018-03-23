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
            to='/'
            className='homeLink'
          >
            Home
            </Link>
        </div>
        <Header />
        <RegisterForm />
      </div>
    );
  }
}
