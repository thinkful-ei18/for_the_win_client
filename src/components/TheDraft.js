import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchNbaPlayers } from '../actions/draft.actions'

import './styles/theDraft.css';


export class TheDraft extends Component {

  componentDidMount() {
    this.props.dispatch(fetchNbaPlayers())
  }
  
  render() {

    const availablePlayers=this.props.players.map((player, index) => (
      <li key={index} className='playerList'> {player.firstName} {player.lastName}</li>
    ));

    return (
      <div className='theDraft'>
        <h1>Draft your team!</h1>
        <ul className='availablePlayers'>
          {availablePlayers}
        </ul>
      </div>
    );
  }
}

const mapStateToProps= state => ({
  players:state.players
})

export default connect(mapStateToProps)(TheDraft)
