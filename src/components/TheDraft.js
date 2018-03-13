import React, { Component } from 'react';

import Players from './Players';

import './styles/theDraft.css';


export default class TheDraft extends Component {
  
  render() {

    return (
      <div className='theDraft'>
        <h1>Draft your team!</h1>
        <Players />
      </div>
    );
  }
}
