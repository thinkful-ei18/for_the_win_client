import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Register from './components/Register/Register';
import Login from './components/Login/Login';
import League from './components/League/League';
import TheDraft from './components/Draft/TheDraft';
import Dashboard from './components/Dashboard/Dashboard';
import LandingPage from './components/LandingPage/LandingPage';
import GameSchedule from './components/DGS/GameSchedule';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';

export default class App extends Component {
  
  render() {

    return (
      <Router>
        <div className='appPage'>
          <main className='main' role='main'>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/league' component={League} />
            <Route exact path='/draft' component={TheDraft} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/games' component={GameSchedule} />
            {/* <Route exact path='/leaderboard' component={LeaderBoard} /> */}
          </main>
        </div>
      </Router>
    );
  }
}

