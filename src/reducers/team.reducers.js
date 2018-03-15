import * as actions from '../actions/team.actions';

const initialState = {
  team: [],
  loading: false,
  error: null
}

export const teamReducer = (state = initialState, action) => {

  if (action.type === actions.FETCH_TEAM_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: null,
      team: action.team || []
    }
  }

  return state;
} 
