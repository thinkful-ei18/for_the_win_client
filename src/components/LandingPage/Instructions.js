import React, { Component } from 'react';

import './landingPage.css';


export default class LandingPage extends Component {

  render() {

    return (
      <ul className='instructions'>
        <li className='instructionsLi'>Create a free user account</li>
        <li className='instructionsLi'>Upon your account creation, pick 10 players for your fantasy league</li>
        <li className='instructionsLi'>View your teams stats for their most recently played game on your dashboard.</li>
      </ul>
    );
  }
}

