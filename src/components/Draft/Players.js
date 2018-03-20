import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchNbaPlayers } from '../../actions/draft.actions';
import { fetchAddPlayersToTeam } from '../../actions/draft.actions';
import { fetchRemovePlayersFromTeam } from '../../actions/draft.actions';
import { makeSymmDiffFunc } from '../../utils/index';

import './theDraft.css';


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
        className='playerList'
      >
        <button
          className='liButton'
          onClick={() => {
            this.props.dispatch(fetchAddPlayersToTeam(player))
          }}>
          {player.firstName} {player.lastName}
        </button>
      </li>
    ));

    const myPlayers = this.props.team.map((player, index) => (
      <li
        key={index}
        className='teammate'
      >
        <button
          className='liButton'
          onClick={() => {
            this.props.dispatch(fetchRemovePlayersFromTeam(player.playerID))
          }}>
          {player.firstName} {player.lastName}
        </button>
      </li>
    ));


    return (
        <div className='players'>
          <ul className='myPlayers'>
            {myPlayers}
            {this.props.team.length === 10 &&
            <Link to='/home'>
              <button className='playersSubmitButton'>
                Submit
              </button>
            </Link>
          }
          </ul>
      
          <ul className='availablePlayers'>
            {availablePlayers}
          </ul>

          
        </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.draftReducer.players,
  team: state.draftReducer.team
})

export default connect(mapStateToProps)(Players)