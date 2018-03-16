import React, { Component } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { Redirect } from 'react-router-dom';

import Input from '../Login/Input';
import { required, nonEmpty, greaterThan } from '../Login/validators';
import { API_BASE_URL } from '../../config';
import { userCreated } from '../../actions/userActions';

import './registerForm.css';


export class RegisterForm extends Component {

  onSubmit(values) {
    console.log('USER: ', values)
    return fetch(`${API_BASE_URL}/team/adduser`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      console.log('RES: ', res)
      // if (!res.ok) {
      //   if (res.headers.has('content-type') && 
      //   res.headers.get('content-type').startsWith('application/json')) {
      //     return res.json().then(err => Promise.reject(err));
      //   }

      //   return Promise.reject({
      //     code: res.status,
      //     message: res.statusText
      //   });
      // } else 
      if (res.statusText === "Created") {
        console.log('this user was created!')
        this.dispatch(userCreated())
        
      }
    })
    .catch(err => {
      console.log('ERR: ', err);
      const { reason, message, location } = err;
      if (reason === 'ValidationError') {
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
      return Promise.reject(
        new SubmissionError({
          _error: 'Error submitting message'
        })
      );
    });
  }

  render() {

    console.log('REG PROPS: ', this.props);
    console.log('STATE: ', this.state);

    let errorMessage;
    if (this.props.submitFailed) {
      errorMessage = (
        <div className="message errorMessage">Submit was unsuccessful</div>
      );
    }

    // if(loggedIn) {
    //   return <Redirect to='/draft' />
    // }

    return(
      <form className='loginForm' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <fieldset>

          <Field
            component={Input}
            name='fullName'
            className='fullName'
            id='fullName'
            type='text'
            placeholder='first & last name'
          />

          <Field
            component={Input}
            name='username'
            className='username'
            id='username'
            type='text'
            placeholder='username'
            validate={[required, nonEmpty]}
          />

          <Field
            component={Input}
            name='email'
            className='email'
            id='email'
            type='text'
            placeholder='email address'
            validate={[required, nonEmpty]}
          />

          <Field
            component={Input}
            name='password'
            className='password'
            id='password'
            type='text'
            placeholder='password'
            validate={[required, nonEmpty, greaterThan]}
          />

          <Field
            component={Input}
            name='teamName'
            className='teamName'
            id='teamName'
            type='text'
            placeholder='team name'
            validate={[required, nonEmpty]}
          />

          <br>
          </br>
          {errorMessage}

          <button
            className='submitButton'
            type="submit"
            disabled={this.props.pristine || this.props.submitting}>
            REGISTER
            </button>

        </fieldset>
      </form>
    );
  }
}

export default reduxForm({
  form: 'register'
})(RegisterForm)



/**
 Resources:
 https://reacttraining.com/react-router/web/example/auth-workflow
 */