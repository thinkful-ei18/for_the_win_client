import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import Header from './Header';
import Team from './Team';
import Score from './Score';
import InputMomentPicker from './InputMomentPicker';
import CountdownTimer from './CountdownTimer';
import { checkUserAuth, logout } from '../actions/userActions';
import { retrieveLeagues, setDraftScheduleSuccess } from '../actions/leagueActions';
import { findUsersLeague } from '../localStorage';

import '../styles/dashboard.css';
import '../styles/navbar.css';


export class Dashboard extends Component {

  componentWillMount() {
    this.props.dispatch(checkUserAuth());
    this.props.dispatch(retrieveLeagues());
  }

  render() {

    if (this.props.loggedOut) {
      return <Redirect to='/' />
    }


    const usersDraftSchedule = (JSON.parse(findUsersLeague())).draftSchedule;
    let renderedDashboard;

    if (usersDraftSchedule === null) {
      renderedDashboard = <InputMomentPicker />
    }
    else if(Date.parse(`${usersDraftSchedule}`) > Date.parse(`${new Date()}`)) {
      renderedDashboard = <CountdownTimer />
    }
    else {
      renderedDashboard = <Team />
    }

    const styles = {
      navlink: {
        textDecoration: 'none',
        color: '#E3EBE8'
      }
    }

    return(
      <div className='dashboard'>

        <div className='navBar'>
          <button
            className='navLink'>
            <Link 
              to='/games'
              style={styles.navlink} > 
              Schedule
            </Link>
          </button>
          <button
            className='navLink'>
            <Link 
              to='/leaderboard'
              style={styles.navlink} >
              Leaderboard
            </Link>
          </button>
          <button
            className='logoutButton'
            onClick={() => this.props.dispatch(logout()) } >
            Logout
          </button>
        </div>

        <Header />
        {renderedDashboard}

      </div>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.userReducer.authToken,
  loggedOut: state.userReducer.loggedOut,
  user: state.userReducer.user,
  leagues: state.leagueReducer.leagues !== null ? state.leagueReducer.leagues : [],
  draftSchedule: state.leagueReducer.draftSchedule
})

export default connect(mapStateToProps)(Dashboard)


