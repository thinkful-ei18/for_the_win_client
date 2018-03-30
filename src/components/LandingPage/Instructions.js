import React, { Component } from 'react';

import './landingPage.css';


export default class LandingPage extends Component {

  render() {

    return (
      <div className='instructionsDiv'>
        <h3 className='instructionsHeader'>Welcome basketball fans!</h3>
        <p className='instructions'>1. Create a free user account</p>
        <p className='instructions'>2. Choose 10 NBA players whose stats you want to keep up with.</p>
        <p className='instructions'>3. View your player's stats and plan which games to watch daily in one convenient location!</p>
      </div>
    );
  }
}

