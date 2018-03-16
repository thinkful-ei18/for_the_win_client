import { API_BASE_URL } from '../config'


/* ========================= FETCH ALL STATS ========================= */

export const fetchRosterStats = team => dispatch => {
  dispatch(fetchRosterStatsRequest);

  let playerIDs = team.map(player => player.playerID)

  return playerIDs.forEach(playerID => {
    dispatch(fetchIndividualStats(playerID))
  })

}

export const fetchIndividualStats = playerID => dispatch => {
  
  return fetch(`${API_BASE_URL}/api/stats?player=${playerID}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
    })
    .then(res => res.json() )
    .then(logs => {
      let stats = logs.slice(-1)[0];
      dispatch(fetchRosterStatsSuccess(stats))
    })
    .catch(err => dispatch(fetchRosterStatsError(err)) );

};


export const FETCH_ROSTER_STATS_REQUEST = 'FETCH_ROSTER_STATS_REQUEST'
export const fetchRosterStatsRequest = () => ({
  type: FETCH_ROSTER_STATS_REQUEST
})

export const FETCH_ROSTER_STATS_SUCCESS = 'FETCH_ROSTER_STATS_SUCCESS'
export const fetchRosterStatsSuccess = stats => ({
  type: FETCH_ROSTER_STATS_SUCCESS,
  stats
})

export const FETCH_ROSTER_STATS_ERROR = 'FETCH_ROSTER_STATS_ERROR'
export const fetchRosterStatsError = err => ({
  type: FETCH_ROSTER_STATS_ERROR,
  err
})