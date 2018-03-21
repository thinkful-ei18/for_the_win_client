import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header';
import Team from './Team';
import { checkUserAuth } from '../../actions/userActions';

import './dashboard.css';


export class Dashboard extends Component {

  componentWillMount() {
    this.props.dispatch(checkUserAuth())
  }

  render() {

    return(
      <div className='dashboard'>
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


