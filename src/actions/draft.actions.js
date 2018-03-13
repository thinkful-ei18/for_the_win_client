import { API_ACTIVE_PLAYERS_BASE_URL, username, password } from '../config'


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
  fetch(
    `${API_ACTIVE_PLAYERS_BASE_URL}?fordate=${today}&playerstats=none`,{
      headers: {
      "Authorization": "Basic " + btoa(`${username}:${password}`),
      "Accept-Encoding": "gzip"
      }
    }
  )
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.statusText)
      }
      return res.json()
    })
    .then(res => {
      const players = res.activeplayers.playerentry.map(obj => {
        let firstName = obj.player.FirstName;
        let lastName = obj.player.LastName;
        let playerID = obj.player.ID;
        return {
          playerID,
          firstName,
          lastName
        };
      });
      dispatch(fetchNbaPlayersSuccess(players))
    })
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