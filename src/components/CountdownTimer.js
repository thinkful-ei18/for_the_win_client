import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Countdown from 'react-countdown-now';

import '../styles/countdownTimer.css';

export class CountdownTimer extends Component {

  render(){
    const CountdownCommpleted = () => <Redirect to='/draft' />;
    
    return(
      <div>
        <h1 className='countdown-header'>Prepare to draft your team in:</h1>
        <p className='countdown-details'>(days: hours: minutes: seconds)</p>
        <section className='countdown-timer'>
          <Countdown date={this.props.draftSchedule}>
            <CountdownCommpleted />
          </Countdown>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  draftSchedule: state.leagueReducer.draftSchedule
})

export default connect(mapStateToProps)(CountdownTimer)

/*
Resources:
 - https://www.npmjs.com/package/react-countdown-now */