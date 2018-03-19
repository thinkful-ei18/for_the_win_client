import React, { Component } from 'react';
import { connect } from 'react-redux';

import Team from './Team';


import './dashboard.css';
import { checkUserAuth } from '../../actions/userActions';


export class Dashboard extends Component {

  componentWillMount() {
    this.props.dispatch(checkUserAuth())
  }

  render() {

    return(
      <div className='dashboard'>
        <h1>Dashboard</h1>
        <Team />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.userReducer.authToken
})

export default connect(mapStateToProps)(Dashboard)


