import React, { Component } from 'react';
import ReactModal from 'react-modal';

import './landingPage.css';


export default class BeingUpdated extends Component {
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
            <button 
              className='navLink'
              onClick={this.handleOpenModal}>
              Click Here
            </button>
          </div>

          <section className='section' >
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
            <p className='updating'>
              Hello there! <br /><br />
              Thanks for visiting <span className='ftw'>For The Win</span>! Unfortunately, the API powering this site is undergoing at least one month of updates. Upon their completion I should have this app back online.<br /><br />
              In the meantime, be sure to check out some of my other projects at
              <span className='space'>
                <a href='http://www.alishaantoinette.com/' 
                  target='_blank' 
                  rel='noopener noreferrer'> 
                    www.alishaantoinette.com
                </a>. 
              </span>
            </p>
          </ReactModal>

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