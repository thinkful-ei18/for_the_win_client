import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../Header';
import Players from './Players';
import { checkUserAuth } from '../../actions/userActions';

import './theDraft.css';
import '../navbar.css';


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
              className='navLink'
            >
              Home
            </Link>
          </div>
          <Header />
          <p className='info'>The draft will begin according to your drafting order.</p>
          <p className='info'>Each manager has 10 roster spots on their team: 2 Point Guards(PG), 1 Shooting Guard(SG), 1 Guard(G), 2 Small Forward's(SF), 1 Power Forward(PF), 1 Forward(F) and 2 Center's(C). </p>
          <p className='info'>Each player can only be chosen once amongst your league.</p>
          <Players />
        </div>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.userReducer.authToken
})

export default connect(mapStateToProps)(TheDraft)