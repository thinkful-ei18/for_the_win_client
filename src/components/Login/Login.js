import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header';
import LoginForm from './LoginForm';

import './login.css';


export class Login extends Component {

  render() {

    return (
      <div className='login'>
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
