import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Redirect } from 'react-router-dom';

import Input from '../Login/Input';
import { required, nonEmpty, greaterThan } from '../Login/validators';
import { createUser } from '../../actions/userActions';

import './registerForm.css';


export class RegisterForm extends Component {

  register(values) {
    return this.props.dispatch(createUser(values))
  }

  render() {

    let errorMessage;
    if (this.props.submitFailed) {
      errorMessage = (
        <div className="message errorMessage">{this.props.error}</div>
      );
    }

    if (this.props.submitSucceeded) {
      return <Redirect to='/team' />
    }

    return(
      <form className='loginForm' onSubmit={this.props.handleSubmit(values => this.register(values))}>
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
          <br>
          </br>

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