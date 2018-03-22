import React, { Component } from 'react';

import './landingPage.css';


export default class LandingPage extends Component {

  render() {

    return (
      <div className='instructionsDiv'>
        <h3 className='instructionsHeader'>Welcome to the #1 basketball stat tracker app!</h3>
        <p className='instructions'>1. Create a free user account</p>
        <p className='instructions'>2. Pick the 10 players whose stats you want to keep up with.</p>
        <p className='instructions'>3. Keep track of each player's offensive and defensive stats daily.</p>
      </div>
    );
  }
}

