import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';

import Instructions from './Instructions';

import './landingPage.css';
import '../navbar.css';


export default class LandingPage extends Component {
  constructor() {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }

  render() {

    return (
        <div className='landingPage'>
          <div className='homepageNavBar'> 
            <Link 
              to='/login' 
              className='navLink'
            >
              Login
            </Link>
            <Link
              to='/register'
              className='navLink'
            >
              Register
            </Link>
            <button 
              className='navLink'
              onClick={this.handleOpenModal}>
              About
            </button>
          </div>

          <section className='section ftw' >
            <h1>FOR THE WIN</h1>
          </section>

          <ReactModal 
            isOpen={this.state.showModal}
            contentLabel="About For The Win"
            className='modalContent'
            overlayClassName='modalOverlay'
            shouldReturnFocusAfterClose={false}
          >
            <button 
              onClick={this.handleCloseModal}
              className='closeModal'
            >
              X
            </button>
            <Instructions />
          </ReactModal>

          {/* <p className='photoCred'>Photo by Alex Perez on Unsplash</p> */}
        </div>
    );
  }
}

ReactModal.setAppElement('body');

/*
Resources:
 - http://reactcommunity.org/react-modal/
 - https://github.com/reactjs/react-modal/issues/576
*/