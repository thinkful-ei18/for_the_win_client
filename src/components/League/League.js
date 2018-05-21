import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import Header from '../Header';
import { createLeague } from '../../actions/leagueActions';
import { checkUserAuth } from '../../actions/userActions';

// import './league.css';


class League extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(checkUserAuth());
  }

  onChange (event) {
    // console.log('TYPING:', event.target.value)
    this.setState({ value: event.target.value })
  }

  onSubmit (event) {
    event.preventDefault(); 
    console.log('FORM VALUE:' ,this.state.value)
    this.props.dispatch(createLeague(this.state.value));
  };

  render() {
    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div className="message errorMessage">{this.props.error}</div>
      );
    }

    if (this.props.next) {
      // return <Redirect to='/draft' />
      console.log('LEAGUE PROPS:', this.props)
    }

    const lessThanFive = this.props.leagues.filter( obj => obj.users.length <= 4)
    console.log('LESS THAN:', lessThanFive);
    
    const availableLeagues = lessThanFive.map((league, index) => (
      <div className='available-league'>
        <input
          key={ index }
          type='radio'
          id={ league.name }
          value={ league.name }
        />
        <label
          for={ league.name }
        >
        { league }
        </label>
      </div>
    ))

    return(
      <main role='main' className='league'>
        <div className='navBar'>
            <Link
              to='/'
              className='homeLink'
            >
              Home
            </Link>
          </div>
        <Header />

        { errorMessage }
        <section className='create'>
          <h3>Create a new league!</h3>
          <form onSubmit={this.onSubmit}>
            <label>League name:</label>
            <input
              type='text'
              value={this.state.value}
              onChange={this.onChange}
              placeholder='Your League'
              name='league'
              id='league-name'
            />
            <button
              type='submit'
              className=''
              value='submit'
            >
            Submit
            </button>
          </form>
        </section>

        <section className='join'>
          <h3>Or join a league with your friends!</h3>
          <div>
            { availableLeagues }
          </div>
        </section>

      </main>
    );
  }
}

const mapStateToProps = state => ({
  leagues: state.leagueReducer.leagues,
  next: state.leagueReducer.next,
  error: state.leagueReducer.error,
  loading: state.leagueReducer.loading
});

export default connect(mapStateToProps)(League);

/*
Resources:
 - https://reactjs.org/docs/forms.html
*/