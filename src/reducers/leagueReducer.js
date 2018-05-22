import * as actions from '../actions/leagueActions';

const initialState = {
  leagues: null, // array of league objects
  next: false,
  loading: false,
  error: null
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
      error: null
    }
  }

  if(action.type === actions.CREATE_LEAGUE_ERROR) {
    return {
      ...state,
      error: action.err
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
      error: null
    }
  }

  if(action.type === actions.JOIN_A_LEAGUE_ERROR) {
    return {
      ...state,
      error: action.err
    }
  }

  /* =============== IF THE TYPE IS NOT FOUND, RETURN THE STATE AS IS =============== */
  return state;
}