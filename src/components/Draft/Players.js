import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchNbaPlayers } from '../../actions/draft.actions';
import { fetchAddPlayersToTeam } from '../../actions/draft.actions';

import './players.css';

// in the li add an on click to dispatch an async action to run the put method

export class Players extends Component {

  componentDidMount() {
    this.props.dispatch(fetchNbaPlayers())
  }

  render() {

    const availablePlayers = this.props.players.map((player, index) => (
      <li 
        key={index} 
        onClick={() => {
          const playerID = player.playerID;
          console.log('PID comp: ', playerID);
          this.props.dispatch(fetchAddPlayersToTeam(playerID))
        }} 
        className='playerList'
      >
      {player.firstName} {player.lastName}
      </li>
    ));

    

    return (
      <div className='players'>
        {this.props.team}
        <ul className='availablePlayers'>
          {availablePlayers}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players,
  team: state.team
})

export default connect(mapStateToProps)(Players)