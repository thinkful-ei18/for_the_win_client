import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import Header from '../Header';
import Team from './Team';
import Score from './Score';
import { checkUserAuth, logout } from '../../actions/userActions';

import './dashboard.css';
import '../navbar.css';


export class Dashboard extends Component {

  componentWillMount() {
    this.props.dispatch(checkUserAuth());
  }

  render() {

    if (this.props.loggedOut) {
      return <Redirect to='/' />
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
        <Score />
        <Team />

      </div>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.userReducer.authToken,
  loggedOut: state.userReducer.loggedOut
})

export default connect(mapStateToProps)(Dashboard)


