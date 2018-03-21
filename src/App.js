import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginForm from './components/Login/LoginForm';
import Register from './components/Register/RegisterForm';
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
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/team' component={TheDraft} />
            <Route exact path='/home' component={Dashboard} />
          </main>
        </div>
      </Router>
    );
  }
}

