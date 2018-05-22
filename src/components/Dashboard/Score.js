import React, { Component } from 'react';
import { connect } from 'react-redux';

import './score.css';


class Score extends Component {

  render() {
    
    /* ======== CALCULATE EACH PLAYERS SCORE ======== */
    let tallyPoints = this.props.stats.map(player => {
      let playerScore = 
        parseInt(player.twoPointers, 10) 
        + parseInt(player.threePointers, 10) 
        + parseInt(player.freeThrows, 10) 
        + parseInt(player.assists, 10) 
        + parseInt(player.rebounds, 10) 
        + parseInt(player.steals, 10) 
        + parseInt(player.blocks, 10)

      return playerScore;
    })


    /* ======== CALCULATE THE TEAM SCORE ======== */
    let score = 0;
    tallyPoints.forEach(tally => score += tally);


    return (
      <div className='team-score'>
        <p className='score-p'>Today's Score</p>
        <p className='total-points'>{ score }</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stats: state.statsReducer.stats
})

export default connect(mapStateToProps)(Score);