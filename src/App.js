import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Register from './components/Register';
import Login from './components/Login';
import League from './components/League';
import TheDraft from './components/TheDraft';
import Dashboard from './components/Dashboard';
import GameSchedule from './components/GameSchedule';
import LeaderBoard from './components/LeaderBoard';

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
            <Route exact path='/leaderboard' component={LeaderBoard} />
          </main>
        </div>
      </Router>
    );
  }
}

