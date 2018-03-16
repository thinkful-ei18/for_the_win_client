import * as actions from '../actions/stats.actions';

const initialState = {
  stats: []
}

// const initialState = {
//   player1: [],
//   player2: [],
//   player3: [],
//   player4: [],
//   player5: [],
//   player6: [],
//   player7: [],
//   player8: [],
//   player9: [],
//   player10: [],
// }

export const statsReducer = (state = initialState, action) => {

  if (action.type === actions.FETCH_ROSTER_STATS_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: null,
      stats: [...state.stats, action.stats]
    }
  }

  return state;
} 
