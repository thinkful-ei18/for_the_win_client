import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactModalLogin from 'react-modal-login';

import Instructions from './Instructions';
import { login, createUser } from '../../actions/userActions';

import './landingPage.css';
import './login.css';
import './register.css'


export class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      initialTab: null,
      loading: false,
      error: null
    }
  }

  
  render() {
    console.log('props', this.props)

    if(this.props.user && !this.props.drafting) {
      return <Redirect to='/dashboard' />
    }

    if(this.props.drafting) {
      return <Redirect to='/draft' />
    }
    
    const onLogin = () => {
      console.log('inside login')
      const email = document.querySelector('#email').value;
      console.log('email:', email)
      const password = document.querySelector('#password').value;
      console.log('password:', password)

      return this.props.dispatch(login(email, password))
    };

    const onRegister = () => {
      console.log('inside register')
      const fullName = document.querySelector('#fullName').value;
      const username = document.querySelector('#username').value;
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
      const teamName = document.querySelector('#teamName').value;

      const user = {
        fullName,
        username,
        email,
        password,
        teamName
      }

      return this.props.dispatch(createUser(user))
      .then(() => this.props.dispatch(login(email, password)));
    };


    const openModal = initialTab => {
      this.setState({
        initialTab
      }, () => {
        this.setState({
          showModal: true
        })
      })
    };

    const closeModal = () => {
      this.setState({
        showModal: false,
        error: null
      })
    };

    return (
        <div className='landingPage'>
          {/* NAV BAR BUTTONS */}
          <div className='navBar'> 
            <button 
              className='loginLink'
              onClick={()=> openModal('login')} >
              Login
            </button>
            <button 
              className='registerLink'
              onClick={()=> openModal('register')} >
              Register
            </button>
          </div>

          {/* LOGIN/REGISTER MODAL */}
          <section className='section' >
            <ReactModalLogin
              initialTab={this.state.initialTab}
              visible={this.state.showModal}
              onCloseModal={()=> closeModal()}
              tabs={{loginLabel: 'Login', registerLabel: 'Register'}}
              form={{
                onLogin: () => onLogin(),
                loginInputs: [
                  {type: 'email',
                    name: 'email',
                    inputClass: 'email',
                    id: 'email',
                    placeholder: 'email',
                    },
                    {
                    type: 'password',
                    name: 'password',
                    inputClass: 'password',
                    id: 'password',
                    placeholder: 'password',
                  }],
                loginBtn: {
                    label: 'Log in'
                  },

                onRegister: () => onRegister(),
                registerInputs: [
                    {
                    type: 'name',
                    name: 'fullName',
                    inputClass: 'fullName',
                    id: 'fullName',
                    placeholder: 'first & last name',
                  },
                  {
                    type: 'username',
                    name: 'username',
                    inputClass: 'username',
                    id: 'username',
                    placeholder: 'username',
                  },
                  {type: 'email',
                    name: 'email',
                    inputClass: 'email',
                    id: 'email',
                    placeholder: 'email address',
                    },
                  {
                    type: 'password',
                    name: 'password',
                    inputClass: 'password',
                    id: 'password',
                    placeholder: 'password',
                  },
                  {
                    type: 'text',
                    name: 'teamName',
                    inputClass: 'teamName',
                    id: 'teamName',
                    placeholder: 'team name',
                  }],
                registerBtn: {
                    label: 'Register'
                  }
                }
              }
            />
            <h1>FOR THE WIN</h1>
          </section>

          <div>
            <Instructions />
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
  drafting: state.userReducer.drafting
})

export default connect(mapStateToProps)(LandingPage)

/*
Resources:
- https://www.npmjs.com/package/react-modal-login
*/