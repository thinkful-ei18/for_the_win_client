import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import TheDraft from './components/Draft/TheDraft';
import Dashboard from './components/Dashboard/Dashboard';
import LandingPage from './components/LandingPage/LandingPage';

export default class App extends Component {
  
  render() {

    return (
      <Router>
        <div className='appPage'>
          <main className='main' role='main'>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/team' component={TheDraft} />
            <Route exact path='/home' component={Dashboard} />
          </main>
        </div>
      </Router>
    );
  }
}

