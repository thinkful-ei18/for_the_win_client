import * as actions from '../actions/gameActions';

const initialState = {
  todayGameSchedule: [],
  loading: false,
  error: null
}

export const gamesReducer = (state = initialState, action) => {
  if (action.type === actions.FETCH_DAILY_GAMES_SUCCESS) {
    return {
      ...state,
      todayGameSchedule: action.todayGameSchedule
    }
  }

  return state;

}