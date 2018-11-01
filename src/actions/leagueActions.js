import { API_BASE_URL } from '../config';
import { saveUsersLeague, findUsersLeague } from '../localStorage';


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
  .then(leagues => {
    dispatch(retrieveLeaguesSuccess(leagues));

    let usersLeagueName = (JSON.parse(findUsersLeague())).leagueName;
    console.log('LA ULN:', usersLeagueName);

    const usersLeague = leagues.filter(league => league.name === usersLeagueName)
    if(usersLeague[0].draftSchedule){

      dispatch(saveUsersLeague(usersLeague[0].name, usersLeague[0].draftSchedule));
    }
  })
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
        .then( league => saveUsersLeague(league.name) )
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
        return res.json()
      }   
    })
    .then(league => {
      saveUsersLeague(league.name)
      dispatch(joinALeagueSuccess(league.draftSchedule))
    })
    .then(() => dispatch(retrieveLeagues()) )
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
export const joinALeagueSuccess = draftSchedule => ({
  type: JOIN_A_LEAGUE_SUCCESS,
  draftSchedule
})

export const JOIN_A_LEAGUE_ERROR = 'JOIN_A_LEAGUE_ERROR';
export const joinALeagueError = err => ({
  type: JOIN_A_LEAGUE_ERROR,
  err
})



/* ========================= SET DRAFT SCHEDULE ========================= */
export const setDraftSchedule = (name, draftSchedule) => (dispatch, getState) => {
  dispatch(setDraftScheduleRequest())
  const authToken = getState().userReducer.authToken;

  fetch(`${API_BASE_URL}/league/schedule`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify({
      name,
      draftSchedule
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
      return res.json()
    }
  })
  .then(leagueWithDraftSchedule => {
    saveUsersLeague(leagueWithDraftSchedule.name, leagueWithDraftSchedule.draftSchedule);
    dispatch(setDraftScheduleSuccess(leagueWithDraftSchedule.draftSchedule));   
  })
  .catch(err => {
    let message = 'There was an error with the request.';
    
    dispatch(setDraftScheduleError(message));
  })
}


export const SET_DRAFT_SCHEDULE_REQUEST = 'SET_DRAFT_SCHEDULE_REQUEST';
export const setDraftScheduleRequest = () => ({
  type: SET_DRAFT_SCHEDULE_REQUEST
});

export const SET_DRAFT_SCHEDULE_SUCCESS = 'SET_DRAFT_SCHEDULE_SUCCESS';
export const setDraftScheduleSuccess = draftSchedule => ({
  type: SET_DRAFT_SCHEDULE_SUCCESS,
  draftSchedule
});

export const SET_DRAFT_SCHEDULE_ERROR = 'SET_DRAFT_SCHEDULE_ERROR';
export const setDraftScheduleError = err => ({
  type: SET_DRAFT_SCHEDULE_ERROR,
  err
});



/* ========================= RETRIEVE USER'S LEADERBOARD ========================= */
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


