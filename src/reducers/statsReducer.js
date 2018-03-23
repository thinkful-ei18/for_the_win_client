import * as actions from '../actions/stats.actions';
import { LOGOUT_SUCCESS } from '../actions/userActions';


const initialState = {
  stats: [],
  loading: false,
  error: null
}

export const statsReducer = (state = initialState, action) => {

  if (action.type === actions.FETCH_ROSTER_STATS_REQUEST) {
    return {
      ...state,
      loading: true,
    }
  }

  if (action.type === actions.FETCH_ROSTER_STATS_SUCCESS) {
    return {
      ...state,
      stats: [...state.stats, action.stats],
      loading: false,
      error: null
    }
  }

  if (action.type === actions.FETCH_ROSTER_STATS_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.err
    }
  }

  if (action.type === LOGOUT_SUCCESS) {
    return {
      ...state,
      stats: []
    }
  }

  return state;
} 
