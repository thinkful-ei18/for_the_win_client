import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchNbaPlayers } from '../actions/draft.actions'

import './styles/theDraft.css';


export class TheDraft extends Component {
  // when this component loads, dispatch the action that fetches all players from the api
  // the players should each get their own li

  componentDidMount() {
    this.props.dispatch(fetchNbaPlayers())
  }
  
  render() {
    console.log('THE DRAFT PROPS: ',this.props)


    return (
      <div className='theDraft'>
        <h1>Draft your team!</h1>
        {this.props.players}
      </div>
    );
  }
}

const mapStateToProps= state => ({
  players:state.players
})

export default connect(mapStateToProps)(TheDraft)
