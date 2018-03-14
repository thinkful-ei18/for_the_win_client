import React, { Component } from 'react';
import { connect } from 'react-redux';

import './team.css';


export class Team extends Component {

  render() {

    const myTeam = this.props.team.map(player => (
      <div>
        <p className='rosterPlayer'>{player.firstName} {player.lastName}</p>
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