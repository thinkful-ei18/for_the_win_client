import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import LoginForm from './LoginForm';
import Register from '../Register/Register';
import TheDraft from '../Draft/TheDraft';
import Dashboard from '../Dashboard/Dashboard';

import './login.css';

export default class Login extends Component {

  render() {

    return (
      <Router>
        <div className=''>
          <h1>For The Win!</h1>
          <h3>Your next fantasy basketball app</h3>
          <main>
            <Switch>
              <Redirect exact from="/" to="/draft" />
              <Route exact path='/login' component={LoginForm} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/draft' component={TheDraft} />
              <Route exact path='/home' component={Dashboard} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
