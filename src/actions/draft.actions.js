
export const fetchNbaPlayers = () => dispatch => {
 
  dispatch(fetchNbaPlayersRequest);
  fetch('/api/players')
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.statusText)
      }
      return res.json()
    })
    .then(players => dispatch(fetchNbaPlayersSuccess(players))
    )
    .catch(err => dispatch(fetchNbaPlayersError(err)))
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