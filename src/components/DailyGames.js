import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

import { fetchDailyGames } from '../actions/gameActions';

import '../styles/gameSchedule.css';


export class DailyGames extends Component {

  componentWillMount() {
    this.props.dispatch(fetchDailyGames())
  }

  render() {
    let gameList;
    
    if (!this.props.todayGameSchedule) {
      gameList = <div className='noGames'>There are no games today.</div>
    }
    else if(!this.props.todayGameSchedule[0]) {
      return <Spinner fadeIn='none' className='todayHeader' />
    } else {
      gameList = this.props.todayGameSchedule.map((game, index) => (
        <div 
          key={index}
          className='gameDiv' 
        >
          <div className='gameTimeDiv' >{game.gameTime} EST</div>
          <div className='awayTeamDiv' >{game.awayTeam}</div>
          <div className='atSymbol'>@</div>
          <div className='homeTeamDiv' >{game.homeTeam}</div>
        </div>
      ))
    }

    const today = this.props.todayGameSchedule ? this.props.todayGameSchedule[0].gameDate : 'today';

    return (
      <div className='dailyGames'>
        <h4 className='todayHeader'>Games for { today }:</h4>
        { gameList }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todayGameSchedule: state.gamesReducer.todayGameSchedule
})

export default connect(mapStateToProps)(DailyGames)


