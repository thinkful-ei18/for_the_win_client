import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../Header';
import Players from './Players';
import { checkUserAuth } from '../../actions/userActions';

import './theDraft.css';


export class TheDraft extends Component {
  
  componentWillMount() {
    this.props.dispatch(checkUserAuth())
  }

  render() {

    return (
        <div className='theDraft'>
          <div className='navBar'>
            <Link
              to='/'
              className='homeLink'
            >
              Home
            </Link>
          </div>
          <Header />
          <p className='info'>Choose 10 players to track stats for!</p>
          <Players />
        </div>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.userReducer.authToken
})

export default connect(mapStateToProps)(TheDraft)