import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import Header from '../Header';
import { retrieveLeagues, createLeague, joinALeague } from '../../actions/leagueActions';
import { checkUserAuth } from '../../actions/userActions';

import './league.css';
import '../navbar.css';


class League extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createValue: '',
      joinValue: ''
    };
    this.onCreateChange = this.onCreateChange.bind(this);
    this.onCreateSubmit = this.onCreateSubmit.bind(this);
    this.onJoinChange = this.onJoinChange.bind(this);
    this.onJoinSubmit = this.onJoinSubmit.bind(this);
  }
 
  /* ======== GET USER'S AUTHTOKEN ON REFRESH ======== */
  componentWillMount() {
    this.props.dispatch(checkUserAuth());
  }
  
  /* ======== GET ALL LEAGUES ON PAGE LOAD ======== */
  componentDidMount() {
    this.props.dispatch(retrieveLeagues());
  }

  /* ======== HANDLE THE FORM SUBMISSIONS ======== */
  onCreateChange(event) {
    this.setState({ createValue: event.target.value })
  }

  onCreateSubmit(event) {
    event.preventDefault(); 
    this.props.dispatch(createLeague(this.state.createValue));
  };

  onJoinChange(event) {
    this.setState({ joinValue: event.currentTarget.value})
  }

  onJoinSubmit(event) {
    event.preventDefault();
    this.props.dispatch(joinALeague(this.state.joinValue))
  }


  render() {
    /* ======== HANDLE THE ERROR MESSAGE ======== */
    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div className="message errorMessage">{this.props.error}</div>
      );
    }

    /* ======== HANDLE A SUCCESSFULLY CREATED/JOINED LEAGUE ======== */
    if (this.props.next) {
      return <Redirect to='/draft' />
    }

    /* ======== FILTER THE LEAGUES IN STATE TO ONES THAT A USER CAN JOIN ======== */
    const lessThanFive = this.props.leagues.filter( league => league.users.length <= 4)
    
    /* ======== CREATE AN INPUT & LABEL FOR EACH LEAGUE A USER CAN JOIN ======== */
    const availableLeagues = lessThanFive.map((league, index) => (
      <div className='available-league' key={ index }>
        <input
          type='radio'
          name='leagues'
          value={ league.name }
          id={ league.name }
          onChange={this.onJoinChange}
        />
        <label
          htmlFor={ league.name }
          className='join-label'
        >
          { league.name }
        </label>
      </div>
    ))



    return(
      <main role='main' className='league'>

        <div className='navBar'>
            <Link
              to='/'
              className='navLink'
            >
              Home
            </Link>
          </div>
        <Header />

        { errorMessage }

        <div className='container'>
          <section className='create'>
            <h4 className='league-h4'>Create a new league!</h4>
            <form onSubmit={this.onCreateSubmit}>
              <label className='create-label'>Name:</label>
              <input
                type='text'
                value={this.state.createValue}
                onChange={this.onCreateChange}
                placeholder='for the win'
                name='league'
                id='league-name'
              />
              <button
                type='submit'
                className='submit-button'
                value='submit'
              >
              Submit
              </button>
            </form>
          </section>

          <section className='join'>
            <form onSubmit={this.onJoinSubmit}>
              <h4 className='league-h4'>Or join a league with your friends!</h4>
              <div>
                { availableLeagues }
              </div>
              <button 
                type='submit'
                className='submit-button'
              > 
                Submit
              </button>
            </form>
          </section>
        </div>

      </main>
    );
  }
}

const mapStateToProps = state => ({
  leagues: state.leagueReducer.leagues !== null ? state.leagueReducer.leagues : [],
  next: state.leagueReducer.next,
  error: state.leagueReducer.error,
  loading: state.leagueReducer.loading
});

export default connect(mapStateToProps)(League);

/*
Resources:
 - https://reactjs.org/docs/forms.html
 - https://stackoverflow.com/questions/20982993/html-radio-buttons-allowing-multiple-selections?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
*/