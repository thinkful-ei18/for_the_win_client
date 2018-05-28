import { API_BASE_URL } from '../config'


/* ========================= FETCH ALL STATS ========================= */

export const fetchRosterStats = team => dispatch => {
  dispatch(fetchRosterStatsRequest());

  let playerIDs = team.map(player => player.playerID)

  let idString = playerIDs.toString();

  return fetch(`${API_BASE_URL}/api/stats?idString=${idString}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json() )
    .then(data => {
      let stats = playerIDs.map( id => {
        if (data.find( stat => stat.playerID === id)) {
          return data.find( stat => stat.playerID === id);
        }
        else {
          return {
            firstName: 'N/A',
            lastName: 'N/A',
            dateOfGame: 'N/A',
            playerID: id,
            twoPointers: 'N/A',
            threePointers: 'N/A',
            freeThrows: 'N/A',
            totalPoints: 'N/A',
            rebounds: 'N/A',
            assists: 'N/A',
            steals: 'N/A',
            blocks: 'N/A'
          }
        }
      })
      dispatch(fetchRosterStatsSuccess(stats))
    })
    .catch(err => dispatch(fetchRosterStatsError(err)) );
}


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