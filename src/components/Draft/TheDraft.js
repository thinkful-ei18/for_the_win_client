import React, { Component } from 'react';
import { connect } from 'react-redux';


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
          <h1>Draft your team!</h1>
          <Players />
        </div>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.userReducer.authToken
})

export default connect(mapStateToProps)(TheDraft)