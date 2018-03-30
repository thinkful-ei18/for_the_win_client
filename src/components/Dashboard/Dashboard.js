import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import Header from '../Header';
import Team from './Team';
import { checkUserAuth, logout } from '../../actions/userActions';

import './dashboard.css';


export class Dashboard extends Component {

  componentWillMount() {
    this.props.dispatch(checkUserAuth());
  }

  render() {

    if (this.props.loggedOut) {
      return <Redirect to='/' />
    }

    return(
      <div className='dashboard'>
        <div className='navBar'>
          <button
            className='gameScheduleButton'>
            <Link to='/games'>Today's Schedule</Link>
          </button>
          <button
            className='logoutButton'
            onClick={() => this.props.dispatch(logout()) } >
            Logout
          </button>
        </div>
        <Header />
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


