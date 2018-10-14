import { API_BASE_URL } from '../config'
/**
 * once users receive a jwt, the id inside fetchAddPlayersToTeam needs to reflect the user's id!
 */

/* ========================= FETCH ALL PLAYERS ========================= */

export const fetchNbaPlayers = () => dispatch => {
 
  dispatch(fetchNbaPlayersRequest());
  fetch(`${API_BASE_URL}/api/players`)
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

/* ========================= FILTER NBA PLAYERS BY TEAM ========================= */

export const filterNbaPlayersByTeam = filteredTeam => dispatch => {

  dispatch(filterNbaPlayersByTeamRequest());
  dispatch(filterNbaPlayersByTeamSuccess(filteredTeam))
}

export const FILTER_NBA_PLAYERS_BY_TEAM_REQUEST = 'FILTER_NBA_PLAYERS_BY_TEAM_REQUEST'
export const filterNbaPlayersByTeamRequest = () => ({
  type: FILTER_NBA_PLAYERS_BY_TEAM_REQUEST
})

export const FILTER_NBA_PLAYERS_BY_TEAM_SUCCESS = 'FILTER_NBA_PLAYERS_BY_TEAM_SUCCESS'
export const filterNbaPlayersByTeamSuccess = filteredTeam => ({
  type: FILTER_NBA_PLAYERS_BY_TEAM_SUCCESS,
  filteredTeam
})



/* ========================= ADD PLAYERS TO A TEAM ========================= */

export const fetchAddPlayersToTeam = player => (dispatch, getState) => {
  const authToken = getState().userReducer.authToken;
  dispatch(fetchAddPlayersToTeamRequest());
  fetch(`${API_BASE_URL}/team/add/`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}` 
      },
      body: JSON.stringify({
        "playerPic": player.playerPic,
        "playerID": player.playerID,
        "playerName": player.playerName,
        "playerTeam": player.playerTeam,
        "playerPosition": player.playerPosition
      })
    })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText)
      }
      return res.json()
    })
    .then(res => {
      let team = res.team;
      dispatch(fetchAddPlayersToTeamSuccess(team))}
    )
    .catch(err => dispatch(fetchAddPlayersToTeamError(err)))
}

export const FETCH_ADD_PLAYERS_TO_TEAM_REQUEST = 'FETCH_ADD_PLAYERS_TO_TEAM_REQUEST'
export const fetchAddPlayersToTeamRequest = () => ({
  type: FETCH_ADD_PLAYERS_TO_TEAM_REQUEST
})

export const FETCH_ADD_PLAYERS_TO_TEAM_SUCCESS = 'FETCH_ADD_PLAYERS_TO_TEAM_SUCCESS'
export const fetchAddPlayersToTeamSuccess = team => ({
  type: FETCH_ADD_PLAYERS_TO_TEAM_SUCCESS,
  team
})

export const FETCH_ADD_PLAYERS_TO_TEAM_ERROR = 'FETCH_ADD_PLAYERS_TO_TEAM_ERROR'
export const fetchAddPlayersToTeamError = err => ({
  type: FETCH_ADD_PLAYERS_TO_TEAM_ERROR,
  err
})


/* ========================= REMOVE PLAYERS FROM A TEAM ========================= */

export const fetchRemovePlayersFromTeam = playerID => (dispatch, getState) => {
  const authToken = getState().userReducer.authToken;

  dispatch(fetchRemovePlayersFromTeamRequest());
  fetch(`${API_BASE_URL}/team/remove`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({
        "playerID": playerID
      })
    })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText)
      }
      return res.json()
    })
    .then(res => {
      let team = res.team;
      dispatch(fetchRemovePlayersFromTeamSuccess(team))
    }
    )
    .catch(err => dispatch(fetchRemovePlayersFromTeamError(err)))
}

export const FETCH_REMOVE_PLAYERS_FROM_TEAM_REQUEST = 'FETCH_REMOVE_PLAYERS_FROM_TEAM_REQUEST'
export const fetchRemovePlayersFromTeamRequest = () => ({
  type: FETCH_REMOVE_PLAYERS_FROM_TEAM_REQUEST
})

export const FETCH_REMOVE_PLAYERS_FROM_TEAM_REQUEST_SUCCESS = 'FETCH_REMOVE_PLAYERS_FROM_TEAM_REQUEST_SUCCESS'
export const fetchRemovePlayersFromTeamSuccess = team => ({
  type: FETCH_REMOVE_PLAYERS_FROM_TEAM_REQUEST_SUCCESS,
  team
})

export const FETCH_REMOVE_PLAYERS_FROM_TEAM_REQUEST_ERROR = 'FETCH_REMOVE_PLAYERS_FROM_TEAM_REQUEST_ERROR'
export const fetchRemovePlayersFromTeamError = err => ({
  type: FETCH_REMOVE_PLAYERS_FROM_TEAM_REQUEST_ERROR,
  err
})