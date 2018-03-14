import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchNbaPlayers } from '../../actions/draft.actions';
import { fetchAddPlayersToTeam } from '../../actions/draft.actions';
import { fetchRemovePlayersFromTeam } from '../../actions/draft.actions';
import { makeSymmDiffFunc } from '../../utils/index';

import './players.css';


export class Players extends Component {

  componentDidMount() {
    this.props.dispatch(fetchNbaPlayers())
  }

  render() {

    const getRemainingPlayers = makeSymmDiffFunc((x, y) => x.playerID === y.playerID);
    const remainingPlayers = getRemainingPlayers(this.props.players, this.props.team);

    const availablePlayers = remainingPlayers.map((player, index) => (
      <li 
        key={index} 
        onClick={() => {
          this.props.dispatch(fetchAddPlayersToTeam(player))
        }} 
        className='playerList'
      >
      {player.firstName} {player.lastName}
      </li>
    ));

    const myPlayers = this.props.team.map((player, index) => (
      <li
        key={index}
        onClick={() => {
          this.props.dispatch(fetchRemovePlayersFromTeam(player.playerID))
        }}
        className='myPlayers'
      >
        {player.firstName} {player.lastName}
      </li>
    ));


    return (
        <div className='players'>
          <ul className='myPlayers'>
            {myPlayers}
          </ul>
          {this.props.team.length === 10 &&
            <Link to='/home'>
              <button>
                Submit
              </button>
            </Link>
          }
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