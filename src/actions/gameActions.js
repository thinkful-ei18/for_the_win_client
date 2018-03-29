import { API_BASE_URL } from '../config'


export const fetchDailyGames = () => dispatch => {
  dispatch(fetchDailyGamesRequest());
  return fetch(`${API_BASE_URL}/api/games`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(todayGameSchedule => {
      dispatch(fetchDailyGamesSuccess(todayGameSchedule))
    })
    .catch(err => dispatch(fetchDailyGamesError(err)));

}

export const FETCH_DAILY_GAMES_REQUEST = 'FETCH_DAILY_GAMES_REQUEST';
export const fetchDailyGamesRequest = () => ({
  type: FETCH_DAILY_GAMES_REQUEST
})

export const FETCH_DAILY_GAMES_SUCCESS = 'FETCH_DAILY_GAMES_SUCCESS';
export const fetchDailyGamesSuccess = todayGameSchedule => ({
  type: FETCH_DAILY_GAMES_SUCCESS,
  todayGameSchedule
})

export const FETCH_DAILY_GAMES_ERROR = 'FETCH_DAILY_GAMES_ERROR';
export const fetchDailyGamesError = err => ({
  type: FETCH_DAILY_GAMES_ERROR,
  err
})