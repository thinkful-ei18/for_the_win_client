import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from 'react-spinkit';

import { fetchNbaPlayers, filterNbaPlayersByTeam, fetchAddPlayersToTeam, fetchRemovePlayersFromTeam } from '../../actions/draft.actions';
import { makeSymmDiffFunc } from '../../utils/index';

import './theDraft.css';
import genericProfilePic from '../../images/nba_player_bust.png';


export class Players extends Component {
  /* ======== GET ACTIVE NBA PLAYERS ======== */
  componentDidMount() {
    this.props.dispatch(fetchNbaPlayers())
  }

  render() {

    /* ======== REMOVE/ADD PLAYERS FROM AVAILABLE PLAYERS LIST ======== */
    const getRemainingPlayers = makeSymmDiffFunc((x, y) => x.playerID === y.playerID);
    
    const remainingPlayers = getRemainingPlayers(this.props.players, this.props.team);

    /* ======== USER FILTERING PLAYERS BY TEAM ======== */
    const handleTeamChange = value => {
      console.log('value:', value)
      let filteredTeam = remainingPlayers.filter(player => player.playerTeam === value)
      console.log('team:', filteredTeam)
      this.props.dispatch(filterNbaPlayersByTeam(filteredTeam))
    }

    /* ======== USER FILTERING PLAYERS BY POSITION ======== */
    const handlePositionChange = value => {
      console.log('value:', value)
      let filteredTeam = remainingPlayers.filter(player => player.playerPosition === value)
      this.props.dispatch(filterNbaPlayersByTeam(filteredTeam))
    }

    /* ======== PLAYERS A USER CAN ADD TO THEIR TEAM ======== */
    console.log(this.props.filteredTeam)
    let availablePlayers;
    if (this.props.loading) {
      availablePlayers = <Spinner fadeIn='none' />;
    }
    else {
      availablePlayers = this.props.filteredTeam.map((player, index) => (
        <li
          key={index}
          className='playerList'
        >
          <button
            className='liButton'
            onClick={() => {
              this.props.dispatch(fetchAddPlayersToTeam(player))
            }}>
            <img src={ player.playerPic !== null ? player.playerPic : genericProfilePic} alt={player.playerName} className='playerPic'/>
            <span className='playerPosition'>{player.playerPosition}</span>
            <span>{player.playerName}</span>
          </button>
        </li>
      ));
    }

    /* ======== USER'S SELECTED TEAM ======== */
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
          {player.playerName}
        </button>
      </li>
    ));


    return (
        <div>
          <select
            className='filterBySelect'
            id='nbaTeam'
            type='select'
            onChange={e => handleTeamChange(e.target.value)} 
          >
            <option value='All Teams'> Filter by team: All </option>
            {this.props.allNBATeams.map((NBATeam, index) => (
              <option value={NBATeam.substring(0,3)} key={index}> {NBATeam.substring(4)} </option>
            ))}
          </select>

          <select
            className='filterBySelect'
            id='position'
            type='select'
            onChange={e => handlePositionChange(e.target.value)} 
          >
            <option value='All Positions'> Filter by Position: All </option>
            {this.props.allNBAPositions.map((NBAPosition, index) => (
              <option value={NBAPosition} key={index}> {NBAPosition} </option>
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

const mapStateToProps = state => ({
    players: state.draftReducer.players,
    filteredTeam: state.draftReducer.filteredTeam.length > 0 ? state.draftReducer.filteredTeam : state.draftReducer.players,
    team: state.draftReducer.team,
    allNBATeams: state.draftReducer.allNBATeams,
    allNBAPositions: state.draftReducer.allNBAPositions,
    loading: state.draftReducer.loading
  })


export default connect(mapStateToProps)(Players)
