import React, { Component } from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';

import Input from './Input';
import { required, nonEmpty } from './validators';
import { login } from '../../actions/userActions';

import './login.css';


export class LoginForm extends Component {

  login(values) {
    return this.props.dispatch(login(values.email, values.password))
  }

  render() {

    if (this.props.submitSucceeded) {
      return <Redirect to='/dashboard' />
    }

    let errorMessage;
    if (this.props.submitFailed) {
      errorMessage = (
        <div className="message errorMessage">{this.props.error}</div>
      );
    }

    return (
      <div className='loginFormDiv'>
        <form className='loginForm' onSubmit={this.props.handleSubmit(values => this.login(values))} >
          <fieldset className='loginFieldset'>

            <Field
              component={Input}
              name='email'
              className='email'
              id='loginEmail'
              type='text'
              placeholder='email'
              validate={[required, nonEmpty]}
            />

            <Field
              component={Input}
              name='password'
              className='password'
              id='loginPassword'
              type='password'
              placeholder='password'
              validate={[required, nonEmpty]}
            />

            <br>
            </br>
            {errorMessage}
            <br>
            </br>
            
            <button
              className='loginSubmitButton'
              type="submit"
              disabled={this.props.pristine || this.props.submitting}
            >
              LOG IN
            </button>

          </fieldset>
        </form>

        <p className='registerHere'>Don't have an account? Register <Link to="/register" className='hereLink'>here</Link>.</p>
      </div>
    );
  }
}

export default reduxForm({
  form:'login',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('complaint', Object.keys(errors)[0]))
})(LoginForm)