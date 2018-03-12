import React, { Component } from 'react';

import './styles/theDraft.css';


export default class TheDraft extends Component {

  // when this component loads, dispatch the action that fetches all players from the api
  // the players should each get their own li
  
  render() {

    return (
      <div className='theDraft'>
        <h1>Draft your team!</h1>

      </div>
    );
  }
}
