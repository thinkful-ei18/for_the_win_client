import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from 'react-spinkit';

import Header from './Header';
import LoginForm from './LoginForm';

import '../styles/login.css';
import '../styles/navbar.css';


export class Login extends Component {

  render() {

    let message;
    if (this.props.loading) {
      message = <Spinner fadeIn='none' />;
    }

    return (
      <div className='login'>
        <div className='navBar'>
          <Link
            to='/'
            className='navLink'
          >
            Home
            </Link>
        </div>

        { message }

        <Header />
        <LoginForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.userReducer.loggedIn,
  loading: state.userReducer.loading
});

export default connect(mapStateToProps)(Login);
