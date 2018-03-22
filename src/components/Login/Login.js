import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../Header';
import LoginForm from './LoginForm';

import './login.css';


export class Login extends Component {

  render() {

    return (
      <div className='login'>
        <div className='navBar'>
          <Link
            to='/'
            className='homeLink'
          >
            Home
            </Link>
        </div>
          <Header />
          <LoginForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.userReducer.loggedIn
});

export default connect(mapStateToProps)(Login);
