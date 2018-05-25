import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Header from '../Header';
import { checkUserAuth, logout } from '../../actions/userActions';
import { getLeaderboard } from '../../actions/leagueActions';
import { findLeagueName } from '../../localStorage';

import './leaderBoard.css';
import '../navbar.css';


class LeaderBoard extends Component {
  componentWillMount() {
    this.props.dispatch(checkUserAuth());
  }

  componentDidMount() {
    const name = findLeagueName();
    this.props.dispatch(getLeaderboard(name))
  }

  
  render() {
    if (this.props.loggedOut) {
      return <Redirect to='/' />
    }
    
    const styles = {
      navlink: {
        textDecoration: 'none',
        color: '#E3EBE8'
      }
    }

    let leagueLeaderboard = this.props.leaderboard.map((user, index) => {
      let key = Object.keys(user);

      return <div 
        className='team-leader'
        key={index}
        >
          <p className='league-user-name'> 
            { key[0] }
          </p>
          <p className='league-user-score'> 
            { user[key[0]] }
          </p>
        </div>
    });

    return(
      <div className='leaderboard'>

          <div className='navBar'>
            <button
              className='navLink'>
              <Link 
                to='/games' 
                style={styles.navlink} > 
                Schedule 
              </Link>
            </button>
            <button
              className='navLink' >
              <Link 
                to='/dashboard' 
                style={styles.navlink} > 
                Dashboard 
              </Link>
            </button>
            <button
              className='logoutButton'
              onClick={() => this.props.dispatch(logout()) } >
              Logout
            </button>
          </div>

          <Header />

          <section className='league-leaderboard'>
            { leagueLeaderboard }
          </section>

        </div>
    );
  }
}

const mapStateToProps = state => ({
  leaderboard: state.leagueReducer.leaderboard !== null ? state.leagueReducer.leaderboard : [],
  loggedOut: state.userReducer.loggedOut
})

export default connect(mapStateToProps)(LeaderBoard);