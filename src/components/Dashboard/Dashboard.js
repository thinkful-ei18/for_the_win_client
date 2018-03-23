import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


import Header from '../Header';
import Team from './Team';
import { checkUserAuth, logout } from '../../actions/userActions';

import './dashboard.css';


export class Dashboard extends Component {

  componentWillMount() {
    this.props.dispatch(checkUserAuth());
  }

  

  render() {

    if (this.props.authToken === null) {
      return <Redirect to='/' />
    }

    return(
      <div className='dashboard'>
        <div className='navBar'>
          <button
            className='logoutButton'
            onClick={() => this.props.dispatch(logout())}          >
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
  authToken: state.userReducer.authToken
})

export default connect(mapStateToProps)(Dashboard)


