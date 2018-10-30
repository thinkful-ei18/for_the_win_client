import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

import { fetchTeam } from '../../actions/team.actions';

import './dashboard.css';


export class Team extends Component {

  componentDidMount() {
    if (this.props.stats.length <= 0) {
      this.props.dispatch(fetchTeam());
    }
  }

  render() {

    if (this.props.loading) {
      return <Spinner fadeIn='none' />;
    }

    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div className="errorMessage">{this.props.error}</div>
      );
    }

    /* ======== SORT TEAM ALPHABETICALLY ======== */
    function compare(a, b) {
      if (a.firstName < b.firstName)
        return -1;
      if (a.firstName > b.firstName)
        return 1;
      return 0;
    }

    /* ======== EACH PLAYER'S STATS ======== */
    const playerStats = this.props.stats.map((player, index) => {
      if (player.firstName === 'N/A') {
        let emptyStat = this.props.team.find(teammate => teammate.playerID === player.playerID)
        player.firstName = emptyStat.firstName
        player.lastName = emptyStat.lastName
      }

      return <ul className='playerStats' key ={index}>
        <li className='playerName'>{player.firstName} {player.lastName}</li>
        <li className='gameDay'>{player.dateOfGame}</li>
        <li className='offense'>{player.twoPointers}</li>
        <li className='offense'>{player.threePointers}</li>
        <li className='offense'>{player.freeThrows}</li>
        <li className='offense'>{player.assists}</li>
        <li className='defense'>{player.rebounds}</li>
        <li className='defense'>{player.steals}</li>
        <li className='defense'>{player.blocks}</li>
        <li className='points'>{player.totalPoints}</li>
      </ul>
    }).sort(compare)




    return (
      <div className='team'>
        <p className='scroll'>Scroll to the right for more stats!</p>
        
        <div className='statsDiv'>
          <ul className='descriptions'>
            <li className='playerNametitle'>Player Name</li>
            <li className='gameDayTitle'>Last Game:</li>
            <li className='offenseTitle'>2 PTS</li>
            <li className='offenseTitle'>3 PTS</li>
            <li className='offenseTitle'>FT</li>
            <li className='offenseTitle'>AST</li>
            <li className='defenseTitle'>REB</li>
            <li className='defenseTitle'>STL</li>
            <li className='defenseTitle'>BLK</li>
            <li className='pointsTitle'>PTS</li>
          </ul>
        </div>

        {errorMessage}
        {playerStats}
        
        <p className='NA'>N/A denotes that the player has not played in the last 7 days.</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  team: state.teamReducer.team,
  stats: state.statsReducer.stats,
  loading: state.statsReducer.loading,
  error: state.statsReducer.error
})

export default connect(mapStateToProps)(Team)


/**
 Resources:
 - compare: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
 - spinner: https://github.com/KyleAMathews/react-spinkit
 */