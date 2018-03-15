import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchRosterStats } from '../../actions/stats.actions';
import './team.css';


export class Team extends Component {

  componentDidMount() {
    this.props.dispatch(fetchRosterStats())
  }
  render() {

    const myTeam = this.props.team.map((player, index) => (
      <div>
        <p key={index} className='rosterPlayer'>{player.firstName} {player.lastName}</p>
      </div>
    ));

    return (
      <div className='team'>
        <h1>Team</h1>
        {myTeam}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  team: state.team
})

export default connect(mapStateToProps)(Team)