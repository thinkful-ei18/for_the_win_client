import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchRosterStats } from '../../actions/stats.actions';
import { fetchTeam } from '../../actions/team.actions';

import './team.css';


export class Team extends Component {

  componentDidMount() {
    console.log('comp did mount');
    this.props.dispatch(fetchTeam());
    // this.props.dispatch(fetchRosterStats());
  }

  render() {
    console.log('COMP TEAM: ', this.props);


    const myTeam = this.props.team.map((player, index) => (
        <p key={index} className='rosterPlayer'>{player.firstName} {player.lastName}</p>
    ));

    return (
      <div className='team'>
        <h1>Team</h1>
        <div>
          {myTeam}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  team: state.teamReducer.team
})

export default connect(mapStateToProps)(Team)