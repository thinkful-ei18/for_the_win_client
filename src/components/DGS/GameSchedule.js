import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import Header from '../Header';
import DailyGames from './DailyGames';
import { checkUserAuth, logout } from '../../actions/userActions';

import './gameSchedule.css';


export class GameSchedule extends Component {

  componentWillMount() {
    this.props.dispatch(checkUserAuth());
  }

  render() {

    if (this.props.loggedOut) {
      return <Redirect to='/' />
    }

    return (
      <div className='gameSchedule'>
        <div className='navBar'>
          <button
            className='gameScheduleButton'>
            <Link to='/dashboard'>My Stats</Link>
          </button>
          <button
            className='logoutButton'
            onClick={() => this.props.dispatch(logout()) } >
            Logout
          </button>
        </div>
        <Header />
        <DailyGames />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.userReducer.authToken,
  loggedOut: state.userReducer.loggedOut
})

export default connect(mapStateToProps)(GameSchedule)


