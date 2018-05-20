// import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';

// create a new league
// join an existing league

/* ========================= RETREIVE ALL OF THE LEAGUES ========================= */
// pull all of the docs from the league collection & put them into state
// export const retrieveLeagues = () => (dispatch, getState) => {
//   const authToken = getState().userReducer.authToken;

//   fetch(`${API_BASE_URL}/league`, {
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${authToken}`
//     }
//   })
//   .then(res => {
//     if(!res.ok) {
//       if(res.body) {
//         return res.json()
//           .then(err => Promise.reject(err));
//       }
//       else {
//         return Promise.reject({
//           status: res.status,
//           message: res.statusText
//         })
//       }
//     }

//     return res.json()
//   })
//   .then(leagues => retrieveLeaguesSuccess(leagues))
//   .catch(err => {
//     // const status = err.error;
//     const message = 'You are unauthorized.'
//     dispatch(createLeagueError(message))
//   })
// }

// export const RETRIEVE_LEAGUES_SUCCESS = 'RETRIEVE_LEAGUES_SUCCESS';
// export const retrieveLeaguesSuccess = leagues => ({
//   type: RETRIEVE_LEAGUES_SUCCESS,
//   leagues
// });



/* ========================= CREATE A NEW LEAGUE ========================= */

export const createLeague = name => (dispatch, getState ) => {
  console.log('NAME:', name);
  const authToken = getState().userReducer.authToken;
  dispatch(createLeagueRequest());
  console.log('about to fetch')
  
  fetch(`${API_BASE_URL}/league/add`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify({ name })
  })
  .then(res => {
    console.log('RES:', res)
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

    return res.json();
    // return;
  })
  .then(league => {
    console.log('LEAGUE:', league); 
    // call the action to get all of the leagues
    // dispatch(retrieveLeagues());
    dispatch(createLeagueSuccess(league))

    // dispatch(createLeagueSuccess(league))
  }) // name, users, players
  .catch(err => {
    console.log('ERR:', err)
    const { status } = err.error;
    const message = 
      status === 422
      ? err.message // the league already exists
      : 'You do not have permission to create a league.' // user without an auth token

    dispatch(createLeagueError(message))
    console.log('MESSAGE:', message)
    // return Promise.reject(
    //   new SubmissionError({
    //     _error: message
    //   })
    // )
  })

}

export const CREATE_LEAGUE_REQUEST = 'CREATE_LEAGUE_REQUEST';
export const createLeagueRequest = () => ({
  type: CREATE_LEAGUE_REQUEST
});

export const CREATE_LEAGUE_SUCCESS = 'CREATE_LEAGUE_SUCCESS';
export const createLeagueSuccess = league => ({
  type: CREATE_LEAGUE_SUCCESS,
  league
});

export const CREATE_LEAGUE_ERROR = 'CREATE_LEAGUE_ERROR';
export const createLeagueError = err => ({
  type: CREATE_LEAGUE_ERROR,
  err
})



/* ========================= JOIN A LEAGUE ========================= */

// find all the leagues in the collection (retrieveLeagues)
// filter out the leagues who have 4 or less members
// show the remaining leagues on screen

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
      // return;
      return res.json();
    })
    .then(league => {
      // dispatch(retrieveLeagues());
      dispatch(joinALeagueSuccess(league));
    })
    .catch(err => {
      const status = err.error;
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
export const joinALeagueSuccess = league => ({
  type: JOIN_A_LEAGUE_SUCCESS,
  league
})

export const JOIN_A_LEAGUE_ERROR = 'JOIN_A_LEAGUE_ERROR';
export const joinALeagueError = err => ({
  type: JOIN_A_LEAGUE_ERROR,
  err
})