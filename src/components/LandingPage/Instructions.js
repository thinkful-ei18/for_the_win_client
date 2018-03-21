import React, { Component } from 'react';

import './landingPage.css';


export default class LandingPage extends Component {

  render() {

    return (
      <div className='instructionsDiv'>
        <h3 className='instructionsHeader'>Welcome to your next fantasy basketball app!</h3>
        <p className='instructions'>1. Create a free user account</p>
        <p className='instructions'>2. Pick 10 players for your fantasy league</p>
        <p className='instructions'>3. Track your teams stats and compete against other leagues.</p>
      </div>
    );
  }
}

