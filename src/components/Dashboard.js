import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import Header from './Header';
import Team from './Team';
import Score from './Score';
import InputMomentPicker from './InputMomentPicker';
import CountdownTimer from './CountdownTimer';
import { checkUserAuth, logout } from '../actions/userActions';
import { retrieveLeagues } from '../actions/leagueActions';
import { findUsersLeague } from '../localStorage';

import '../styles/dashboard.css';
import '../styles/navbar.css';


export class Dashboard extends Component {

  componentWillMount() {
    this.props.dispatch(checkUserAuth());
    this.props.dispatch(retrieveLeagues());
  }

  render() {
    console.log('dash user:', this.props.user)

    if (this.props.loggedOut) {
      return <Redirect to='/' />
    }

    const usersDraftSchedule = (JSON.parse(findUsersLeague())).draftSchedule;
    console.log('ULN:', usersDraftSchedule)
    
    // const usersLeague = this.props.leagues.filter( league => league.name === usersLeagueName);
    // console.log('UL:', usersLeague)

    let renderedDashboard;
    // if (usersLeague.length && !usersLeague[0].draftSchedule) {
    //   renderedDashboard = <InputMomentPicker />
    // }
    // else if(usersLeague.length && usersLeague[0].draftSchedule > new Date()){
    //   // show the countdown
    // }
    // else {
    //   renderedDashboard = <Team />
    // }

    // console.log('ds prop:', this.props.draftSchedule)
    // console.log('ds prop string:', `${this.props.draftSchedule}`)
    console.log('date:', new Date())
    console.log('date string:', `${new Date()}`)

    if (usersDraftSchedule === null) {
      renderedDashboard = <InputMomentPicker />
    }
    else if(`${usersDraftSchedule}` < `${new Date()}`){
      // show the countdown
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


