import React, { Component } from 'react';

import Header from './Header';
import Score from './Score';
import Team from './Team';


import './styles/dashboard.css';


export default class Dashboard extends Component {

  render() {

    return(
      <div className='dashboard'>
        <Header />
        <Score />
        <Team />
      </div>
    );
  }
}
