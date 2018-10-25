import { API_BASE_URL } from '../config';
import { saveLeagueName } from '../localStorage';


/* ========================= RETREIVE ALL OF THE LEAGUES ========================= */
export const retrieveLeagues = () => (dispatch, getState) => {
  const authToken = getState().userReducer.authToken;

  fetch(`${API_BASE_URL}/league`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    }
  })
  .then(res => {
    if(!res.ok) {
      if(res.body) {
        return res.json()
          .then(err => Promise.reject(err));
      }
      else {
        return Promise.reject({
          status: res.status,
          message: res.statusText
        })
      }
    }

    return res.json()
  })
  .then(leagues => dispatch(retrieveLeaguesSuccess(leagues)) )
  .catch(err => {
    const message = 'There was an error with your request'
    dispatch(createLeagueError(message))
  })
}

export const RETRIEVE_LEAGUES_SUCCESS = 'RETRIEVE_LEAGUES_SUCCESS';
export const retrieveLeaguesSuccess = leagues => ({
  type: RETRIEVE_LEAGUES_SUCCESS,
  leagues
});



/* ========================= CREATE A NEW LEAGUE ========================= */
export const createLeague = name => (dispatch, getState ) => {
  const authToken = getState().userReducer.authToken;
  dispatch(createLeagueRequest());
  
  fetch(`${API_BASE_URL}/league/add`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify({ name })
  })
  .then(res => {
    if(!res.ok) {
      if(res.body) { 
        return res.json()
          .then(err => Promise.reject(err));
      }
      else {
        return Promise.reject({
          status: res.status,
          message: res.statusText
        });
      }
    }
    else {
      res.json()
        .then( league => saveLeagueName(league.name) )
    }

    return;
  })
  .then(() => dispatch(retrieveLeagues()) ) 
  .then(() => dispatch(createLeagueSuccess()))
  .catch(err => {
    const { status } = err.error;
    const message = 
      status === 422
      ? err.message 
      : 'You do not have permission to create a league.' 

    dispatch(createLeagueError(message))
  })

}

export const CREATE_LEAGUE_REQUEST = 'CREATE_LEAGUE_REQUEST';
export const createLeagueRequest = () => ({
  type: CREATE_LEAGUE_REQUEST
});

export const CREATE_LEAGUE_SUCCESS = 'CREATE_LEAGUE_SUCCESS';
export const createLeagueSuccess = () => ({
  type: CREATE_LEAGUE_SUCCESS
});

export const CREATE_LEAGUE_ERROR = 'CREATE_LEAGUE_ERROR';
export const createLeagueError = err => ({
  type: CREATE_LEAGUE_ERROR,
  err
})



/* ========================= UPDATE DATE/TIME FOR A COMMISSIONER SETTING A DRAFT DAY ========================= */

export const UPDATE_DATE_AND_TIME_FOR_DRAFT_DAY = 'UPDATE_DATE_AND_TIME_FOR_DRAFT_DAY'
export const updateDateAndTimeForDraftDay = m => ({
  type: UPDATE_DATE_AND_TIME_FOR_DRAFT_DAY,
  m
})

/* ========================= JOIN A LEAGUE ========================= */
export const joinALeague = name => (dispatch, getState) => {
  const authToken = getState().userReducer.authToken;
  dispatch(joinALeagueRequest());

  fetch(`${API_BASE_URL}/league/join`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify({
      name
    })
  })
    .then(res => {
      if(!res.ok) {
        if(res.body) {
          return res.json()
            .then(err => Promise.reject(err))
        }
        else {
          return Promise.reject({
            status: res.status,
            message: res.statusText
          })
        }
      }
      else {
      res.json()
        .then( league => {
          saveLeagueName(league.name)
        }
      )
    }
      
      return;
    })
    .then(() => dispatch(retrieveLeagues()) )
    .then(() => dispatch(joinALeagueSuccess()) )
    .catch(err => {
      const { status } = err.error;
      const message = 
        status === 422
        ? err.message
        : 'You do not have permission to join this league.'

        dispatch(joinALeagueError(message));
    })
}

export const JOIN_A_LEAGUE_REQUEST = 'JOIN_A_LEAGUE_REQUEST';
export const joinALeagueRequest = () => ({
  type: JOIN_A_LEAGUE_REQUEST
})

export const JOIN_A_LEAGUE_SUCCESS = 'JOIN_A_LEAGUE_SUCCESS';
export const joinALeagueSuccess = () => ({
  type: JOIN_A_LEAGUE_SUCCESS
})

export const JOIN_A_LEAGUE_ERROR = 'JOIN_A_LEAGUE_ERROR';
export const joinALeagueError = err => ({
  type: JOIN_A_LEAGUE_ERROR,
  err
})


/* ========================= RETREIVE USER'S LEADERBOARD ========================= */
export const getLeaderboard = name => (dispatch, getState) => {
  dispatch(getLeaderboardRequest());
  const authToken = getState().userReducer.authToken;

  fetch(`${API_BASE_URL}/api/league/${name}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    }
  })
  .then(res => {
    if(!res.ok) {
      if(res.body) {
        return res.json()
          .then(err => Promise.reject(err))
      }
      else {
        return Promise.reject({
          status: res.status,
          message: res.statusText
        })
      }
    }
    else {
      return res.json()
    }
  })
  .then(leaderboard => dispatch(getLeaderboardSuccess(leaderboard)))
  .catch(err => {
    let message = err.message === 'Bad Request' ? 'There was an error with the request.' : 'The current season is over, play again this fall!'

    dispatch(getLeaderboardError(message));
  });
}

export const GET_LEADERBOARD_REQUEST = 'GET_LEADERBOARD_REQUEST';
export const getLeaderboardRequest = () => ({
  type: GET_LEADERBOARD_REQUEST
});

export const GET_LEADERBOARD_SUCCESS = 'GET_LEADERBOARD_SUCCESS';
export const getLeaderboardSuccess = leaderboard => ({
  type: GET_LEADERBOARD_SUCCESS,
  leaderboard
});

export const GET_LEADERBOARD_ERROR = 'GET_LEADERBOARD_ERROR';
export const getLeaderboardError = err => ({
  type: GET_LEADERBOARD_ERROR,
  err
});