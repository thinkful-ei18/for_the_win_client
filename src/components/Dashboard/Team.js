import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { fetchRosterStats } from '../../actions/stats.actions';
import { fetchTeam } from '../../actions/team.actions';

import './team.css';


export class Team extends Component {

  componentDidMount() {
    this.props.dispatch(fetchTeam());
    // let playerIDs = this.props.team.map(player => player.playerID)
    // console.log('player IDs: ', playerIDs);
    // this.props.dispatch(fetchRosterStats());
  }

  render() {
    console.log('COMP TEAM: ', this.props.team);
    console.log('TEAM STATS: ', this.props.stats)


    // const myTeam = this.props.team.map((player, index) => (
    //     <p key={index} className='rosterPlayer'>{player.firstName} {player.lastName}</p>
    // ));

    const playerStats = this.props.stats.map((player, index) => (
      <ul className='playerStats' key ={index}>
        <li className='playerName'>{player.firstName} {player.lastName}</li>
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