import * as actions from '../actions/leagueActions';

const initialState = {
  leagues: null, // array of league objects
  // leagueName: '',
  leaderboard: null,
  next: false,
  loading: false,
  error: false
}

export const leagueReducer = (state=initialState, action) => {

  /* =============== RETRIEVE ALL LEAGUES ACTIONS =============== */
  if(action.type === actions.RETRIEVE_LEAGUES_SUCCESS) {
    return {
    ...state,
    leagues: action.leagues,
    next: false
    }
  }
  
  /* =============== CREATE A LEAGUE ACTIONS =============== */
  if(action.type === actions.CREATE_LEAGUE_REQUEST) {
    return {
      ...state,
      loading: true
    }
  }
  
  if(action.type === actions.CREATE_LEAGUE_SUCCESS) {
    return {
      ...state, 
      next: true,
      loading: false,
      error: false
    }
  }

  if(action.type === actions.CREATE_LEAGUE_ERROR) {
    return {
      ...state,
      error: action.err,
      loading: false
    }
  }

  /* =============== JOIN A LEAGUE ACTIONS =============== */

  if(action.type === actions.JOIN_A_LEAGUE_REQUEST) {
    return {
      ...state,
      loading: true
    }
  }

  if(action.type === actions.JOIN_A_LEAGUE_SUCCESS) {
    return {
      ...state,
      next: true,
      loading: false,
      error: false
    }
  }

  if(action.type === actions.JOIN_A_LEAGUE_ERROR) {
    return {
      ...state,
      error: action.err,
      loading: false
    }
  }

  /* =============== SAVE LEAGUE NAME ACTION=============== */
  // if(action.type === actions.SAVE_LEAGUE_NAME) {
  //   console.log('LEAGUE NAME:', action.leagueName)
  //   return {
  //     ...state,
  //     leagueName: action.leagueName
  //   }
  // }

  /* =============== LEADERBOARD ACTIONS =============== */
  if(action.type === actions.GET_LEADERBOARD_REQUEST) {
    return {
      ...state,
      loading: true,
      next: false
    }
  }

  if(action.type === actions.GET_LEADERBOARD_SUCCESS) {
    console.log('ACTION:', action.leaderboard)
    return {
      ...state,
      leaderboard: action.leaderboard,
      loading: false,
      error: false
    }
  }

  if(action.type === actions.GET_LEADERBOARD_ERROR) {
    return {
      ...state,
      error: action.err,
      loading: false
    }
  }

  /* =============== IF THE TYPE IS NOT FOUND, RETURN THE STATE AS IS =============== */
  return state;
}