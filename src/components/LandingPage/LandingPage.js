import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Instructions from './Instructions';

import './landingPage.css';


export default class LandingPage extends Component {

  render() {

    return (
        <div className='landingPage'>
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
          <section className='section' >
            <h1>FOR THE WIN</h1>
          </section>
          <div>
            <Instructions />
          </div>
        </div>
    );
  }
}

