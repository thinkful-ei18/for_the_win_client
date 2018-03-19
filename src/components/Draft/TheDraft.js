import React, { Component } from 'react';

import Players from './Players';
import { checkUserAuth } from '../../actions/userActions';

import './theDraft.css';


export default class TheDraft extends Component {
  
  componentWillMount() {
    this.props.dispatch(checkUserAuth())
  }

  render() {

    return (
        <div className='theDraft'>
          <h1>Draft your team!</h1>
          <Players />
        </div>
    );
  }
}
