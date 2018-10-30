import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import RegisterForm from './RegisterForm';

import '../styles/register.css';
import '../styles/navbar.css';


export default class Register extends Component {

  render() {

    return (
      <div className='register'>
        <div className='navBar'>
          <Link
            to='/'
            className='navLink'
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
