import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import Input from '../Login/Input';
import { required, nonEmpty, greaterThan } from '../Login/validators';

import './registerForm.css';


export class RegisterForm extends Component {


  render() {


    return(
      <form className='loginForm'>
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

          <button
            className='submitButton'
            type="submit"
            disabled={this.props.pristine || this.props.submitting}>
            LOG IN
            </button>

        </fieldset>
      </form>
    );
  }
}

export default reduxForm({
  form: 'register'
})(RegisterForm)