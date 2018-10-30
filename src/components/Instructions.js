import React, { Component } from 'react';

import '../styles/landingPage.css';


export default class LandingPage extends Component {

  render() {

    return (
      <div className='instructionsDiv'>
        <header className='instructionsHead'>
          <h2 className='instructionsTitle'>For The Win</h2>
          <h5 className='instructionsDesc'>the preferred fantasy basketball league</h5>
        </header>

        <div className='instructionBox'>
          <p className='instructions'>1. Register for a free user account.</p>
          <p className='instructions'>2. Create or join a league (up to 5 members).</p>
          <p className='instructions'>3. Form your team of 10 NBA players & follow their stats.</p>
          <p className='instructions'>4. Watch as the lead changes in your league throughout the season!</p>
          <p className='instructions'>( Each offensive & defensive stat are valued at 1 point each. i.e., if a player had (4) 2 point shots, (1) assist and (3) rebounds in their last game, their total would be 8 points. )</p>
        </div>
      </div>
    );
  }
}

