import * as actions from '../actions/team.actions';

const initialState = {
  team: [],
  loading: false,
  error: null
}

export const teamReducer = (state = initialState, action) => {

  if (action.type === actions.FETCH_TEAM_REQUEST) {
    return {
      ...state,
      loading: true,
    }
  }

  if (action.type === actions.FETCH_TEAM_SUCCESS) {
    return {
      ...state,
      team: action.team || [],
      loading: false,
      error: null
    }
  }

  if (action.type === actions.FETCH_TEAM_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.err
    }
  }

  return state;
} 
