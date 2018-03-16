import React, { Component } from 'react';
import { reduxForm, Field, focus } from 'redux-form';

import Input from './Input';
import { required, nonEmpty } from './validators';

import './loginForm.css';


export class LoginForm extends Component {

  render() {

    return (
      <form className='loginForm' >
        <fieldset>

          <Field
            component={Input}
            name='email'
            className='email'
            id='email'
            type='text'
            placeholder='email'
            validate={[required, nonEmpty]}
          />

          <Field
            component={Input}
            name='password'
            className='password'
            id='password'
            type='text'
            placeholder='password'
            validate={[required, nonEmpty]}
          />

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
  form:'login',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('complaint', Object.keys(errors)[0]))
})(LoginForm)