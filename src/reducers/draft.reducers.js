import * as actions from '../actions/draft.actions';

const initialState = {
  players:[],
  team:[],
  loading: false,
  error: null
}

export const draftReducer = (state=initialState, action) => {
  if (action.type === actions.FETCH_NBA_PLAYERS_SUCCESS) {
    return{
      ...state,
      loading: false,
      error: null,
      players: action.players
    }
  } 

  if (action.type === actions.FETCH_ADD_PLAYERS_TO_TEAM_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: null,
      team: action.team
    }
  } 

  return state;
} 
