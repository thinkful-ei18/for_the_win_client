import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

import { fetchTeam } from '../../actions/team.actions';

import './team.css';


export class Team extends Component {

  componentDidMount() {
    this.props.dispatch(fetchTeam());
  }

  render() {
    console.log('STAT PROP: ', this.props.loading);
    console.log('TEAM PROP: ', this.props.loading2);
    if (this.props.loading) {
      return <Spinner fadeIn='none' />;
    }

    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div className="errorMessage">{this.props.error}</div>
      );
    }

    function compare(a, b) {
      if (a.firstName < b.firstName)
        return -1;
      if (a.firstName > b.firstName)
        return 1;
      return 0;
    }

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
        <h1>Team</h1>
        <div>
          <ul className='descriptions'>
            <li className='title'>Player Name</li>
            <li className='title'>Last Game:</li>
            <li className='title'>2 PTS</li>
            <li className='title'>3 PTS</li>
            <li className='title'>FT</li>
            <li className='title'>AST</li>
            <li className='title'>REB</li>
            <li className='title'>STL</li>
            <li className='title'>BLK</li>
            <li className='title'>PTS</li>
          </ul>
          {errorMessage}
          {playerStats}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  team: state.teamReducer.team,
  stats: state.statsReducer.stats,
  loading: state.statsReducer.loading,
  loading2: state.teamReducer.loading,
  error: state.statsReducer.error
})

export default connect(mapStateToProps)(Team)

/**
 Resources:
 - compare: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
 - spinner: https://github.com/KyleAMathews/react-spinkit
 */