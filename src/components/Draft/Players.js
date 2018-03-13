import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchNbaPlayers } from '../actions/draft.actions';
import { API_BASE_URL } from '../config'

import './styles/players.css';

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
          return fetch(`${API_BASE_URL}/user/draft/`, 
          { method: 'PUT', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
              "id": "555555555555555555555555", 
              "playerID": `${player.playerID}` 
            })
          })
        }} 
        className='playerList'
      >
      {player.firstName} {player.lastName}
      </li>
    ));

    return (
      <div className='players'>
        <ul className='availablePlayers'>
          {availablePlayers}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players
})

export default connect(mapStateToProps)(Players)