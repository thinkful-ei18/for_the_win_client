import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Instructions from './Instructions';

import './landingPage.css';


export default class LandingPage extends Component {

  render() {

    return (
        <div className='login'>
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
          <main className='main' role='main'>
            <h1>FOR THE WIN</h1>
            <h4>Your next fantasy basketball app!</h4>
          </main>
          <div>
            <Instructions />
          </div>
        </div>
    );
  }
}

