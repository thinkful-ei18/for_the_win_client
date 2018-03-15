import { API_BASE_URL } from '../config'


/* ========================= FETCH ALL STATS ========================= */

// export const fetchRosterStats = () => dispatch => {

//   dispatch(fetchRosterStatsRequest);
//   fetch(`${API_BASE_URL}/api/stats`)
//     .then(res => {
//       if (!res.ok) {
//         return Promise.reject(res.statusText)
//       }
//       return res.json()
//     })
//     .then(stats => {
//       console.log('STATS: ', stats);
//       dispatch(fetchRosterStatsSuccess(stats))}
//     )
//     .catch(err => dispatch(fetchRosterStatsError(err)))
// }

export const fetchIndividualStats = playerID => {
  return fetch(`${API_BASE_URL}/api/stats?player=${playerID}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText)
    }
    return res.json()
  })
    .then(logs => {
      let stats = logs.slice(-1)[0];
      console.log('STATS ACT: ',stats)
    });

};

export const fetchRosterStats = playerIDs => dispatch => {
  dispatch(fetchRosterStatsRequest);

  return Promise.all(playerIDs.map(playerID => fetchIndividualStats(playerID)))
    .then(combinedPlayerStats => dispatch(fetchRosterStatsSuccess(combinedPlayerStats)))
    .catch(err => fetchRosterStatsError(err));

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