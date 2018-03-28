import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchNbaPlayers, filterNbaPlayersByTeam, fetchAddPlayersToTeam, fetchRemovePlayersFromTeam } from '../../actions/draft.actions';
import { makeSymmDiffFunc } from '../../utils/index';

import './theDraft.css';


export class Players extends Component {

  componentDidMount() {
    this.props.dispatch(fetchNbaPlayers())
  }

  render() {

    const getRemainingPlayers = makeSymmDiffFunc((x, y) => x.playerID === y.playerID);

    const remainingPlayers = getRemainingPlayers(this.props.players, this.props.team);

    const handleChange = value => {
      let filteredTeam = remainingPlayers.filter(player => player.playerTeam === value)
      this.props.dispatch(filterNbaPlayersByTeam(filteredTeam))
    }

    const availablePlayers = this.props.filteredTeam.map((player, index) => (
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
        <div>
          <select
            className='teamFilterSelect'
            id='nbaTeam'
            type='select'
            onChange={e => handleChange(e.target.value)} 
          >
            <option value='All Teams' > Filter by team: All </option>
            {this.props.allNBATeams.map((NBATeam, index) => (
              <option value={NBATeam} key={index}> {NBATeam} </option>
            ))}
          </select>
          
          <div className='players'>
            <ul className='myPlayers'>
              {myPlayers}
              {this.props.team.length === 10 &&
              <Link to='/dashboard'>
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
        </div>
    );
  }
}

// const mapStateToProps = state => {
//   let players = []

//   if (state.draftReducer.filteredTeam.length > 0) {
//     players = state.draftReducer.filteredTeam
//   } else {
//     players = state.draftReducer.players
//   }
  
//   return {
//     players,
//     team: state.draftReducer.team,
//     allNBATeams: state.draftReducer.allNBATeams
//   }

// }

const mapStateToProps = state => {
  let filteredTeam = []

  if (state.draftReducer.filteredTeam.length > 0) {
    filteredTeam = state.draftReducer.filteredTeam
  } else {
    filteredTeam = state.draftReducer.players
  }

  return {
    players: state.draftReducer.players,
    filteredTeam,
    team: state.draftReducer.team,
    allNBATeams: state.draftReducer.allNBATeams
  }
}

export default connect(mapStateToProps)(Players)
