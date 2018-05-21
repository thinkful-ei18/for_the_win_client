import * as actions from '../actions/leagueActions';

const initialState = {
  leagues: [], // array of league objects
  next: false,
  loading: false,
  error: null
}

export const leagueReducer = (state=initialState, action) => {
  
  /* =============== CREATE A LEAGUE ACTIONS =============== */
  if(action.type === actions.CREATE_LEAGUE_REQUEST) {
    return {
      ...state,
      loading: true
    }
  }
  
  if(action.type === actions.CREATE_LEAGUE_SUCCESS) {
    console.log('SPREAD LEAGUES:', ...state.leagues)
    console.log('created the league:', action.league)

    return {
      ...state, 
      leagues: [...state.leagues, action.league],
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
    const updatedLeague = state.leagues.map(obj => {
      if(obj.name === action.league.name) {
        return action.league
      }
      else {
        return obj;
      }
    });

    return {
      leagues: updatedLeague,
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