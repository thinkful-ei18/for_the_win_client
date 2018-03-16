import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTeam } from '../../actions/team.actions';

import './team.css';

/**
 * Figure out how to get stats to pull in alphabetical order...
 */

export class Team extends Component {

  componentDidMount() {
    this.props.dispatch(fetchTeam());
  }

  render() {
    const myTeam = this.props.team.map((player, index) => (
      <ul key={index} className='roster'>
        <li className='player'>{player.firstName} {player.lastName}</li>
      </ul>
    ));

    const playerStats = this.props.stats.map((player, index) => (
      <ul className='playerStats' key ={index}>
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
    ))

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
          {myTeam}
          {playerStats}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  team: state.teamReducer.team,
  stats: state.statsReducer.stats
})

export default connect(mapStateToProps)(Team)