import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


import Header from '../Header';
import LoginForm from './LoginForm';
import Register from '../Register/Register';
import TheDraft from '../Draft/TheDraft';
import Dashboard from '../Dashboard/Dashboard';

import './login.css';

export class Login extends Component {

  render() {

    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <Router>
        <div className='login'>
          <Header />
          <main>
              <Route exact path='/' component={LoginForm} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/team' component={TheDraft} />
              <Route exact path='/home' component={Dashboard} />
          </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.userReducer.loggedIn
});

export default connect(mapStateToProps)(Login);
