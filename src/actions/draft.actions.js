import { API_DAILY_BASE_URL} from '../../config'
// https://api.mysportsfeeds.com/v1.2/pull/nba/current/daily_player_stats.json?fordate=20180308&playerstats=2PA,2PM,3PA,3PM,FTA,FTM


export const fetchNbaPlayers = () => dispatch => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd
  }

  if (mm < 10) {
    mm = '0' + mm
  }

  today = `${yyyy}${mm}${dd}`

  dispatch(fetchNbaPlayersRequest);
  fetch(`${API_DAILY_BASE_URL}?fordate=${today}&playerstats=none`)
    .then(res =>{
      console.log('RES:', res);
      if(!res.ok) {
        return Promise.reject(res.statusText)
      }

      return res.json()
    })
    .then(players => {
      dispatch(fetchNbaPlayersSuccess(players))
    })
    // .catch(err => dispatch(fetchNbaPlayersError(err)))
}

export const FETCH_NBA_PLAYERS_REQUEST = 'FETCH_NBA_PLAYERS_REQUEST'
export const fetchNbaPlayersRequest = () => ({
  type: FETCH_NBA_PLAYERS_REQUEST
})

export const FETCH_NBA_PLAYERS_SUCCESS = 'FETCH_NBA_PLAYERS_SUCCESS'
export const fetchNbaPlayersSuccess = players => ({
  type: FETCH_NBA_PLAYERS_SUCCESS,
  players
})

export const FETCH_NBA_PLAYERS_ERROR = 'FETCH_NBA_PLAYERS_ERROR'
export const fetchNbaPlayersError = err => ({
  type: FETCH_NBA_PLAYERS_ERROR,
  err
})