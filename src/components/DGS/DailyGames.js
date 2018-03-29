import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

// import { Redirect } from 'react-router-dom';


import { fetchDailyGames } from '../../actions/gameActions';

import './gameSchedule.css';


export class DailyGames extends Component {

  componentWillMount() {
    // this.props.dispatch(checkUserAuth());
    this.props.dispatch(fetchDailyGames())
  }

  render() {
    if(!this.props.todayGameSchedule[0]) {
      return <Spinner fadeIn='none' className='todayHeader' />
    }
    // if (this.props.authToken === null) {
    //   return <Redirect to='/' />
    // }

    console.log('GS: ', this.props.todayGameSchedule[0]);

    const gameList = this.props.todayGameSchedule.map((game, index) => (
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

    const today = this.props.todayGameSchedule[0].gameDate || '';

    return (
      <div className='dailyGames'>
        <h4 className='todayHeader'>Games for {today}:</h4>
        {gameList}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // authToken: state.userReducer.authToken
  todayGameSchedule: state.gamesReducer.todayGameSchedule
})

export default connect(mapStateToProps)(DailyGames)


