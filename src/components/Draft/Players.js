import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import Select from 'material-ui/Select';

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
    console.log('RP: ', remainingPlayers);

    const availablePlayers = remainingPlayers.map((player, index) => (
      <li 
        key={index}  
        className='playerList'
        label={player.playerTeam}
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

    const handleChange = value => {
      console.log('value: ', value);
      let filteredTeam = remainingPlayers.filter(player => player.playerTeam === value)
      console.log('FT: ', filteredTeam);
      this.props.dispatch(filterNbaPlayersByTeam(filteredTeam))
    }

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
          <select
            {...this.props.input}
            id='nbaTeam'
            type='select'
            onChange={e => handleChange(e.target.value)} 
          >
            <option
              value='All Teams'
            >
              All Teams
            </option>
            <option
              value='Golden State Warriors'
            >
              Golden State Warriors
            </option>
          </select>

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
    );
  }
}

const mapStateToProps = state => {
  let players = []

  if (state.draftReducer.filteredTeam.length > 0) {
    players = state.draftReducer.filteredTeam
  } else {
    players = state.draftReducer.players
  }
  
  return {
    players,
    team: state.draftReducer.team
  }

}

export default connect(mapStateToProps)(Players)
