import { API_BASE_URL } from '../config'
import { fetchIndividualStats } from './stats.actions'

// REMOVE HARD CODED ID'S!!!

/* ========================= FETCH USER'S TEAM ========================= */

export const fetchTeam = () => dispatch => {
  dispatch(fetchTeamRequest);
  fetch(`${API_BASE_URL}/team/`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText)
      }
      return res.json()
    })
    .then(team => {
      dispatch(fetchTeamSuccess(team))
      return team
    })
    .then(team => {
      dispatch(fetchIndividualStats(team[0].playerID))
    })
    .catch(err => dispatch(fetchTeamError(err)))
}

export const FETCH_TEAM_REQUEST = 'FETCH_TEAM_REQUEST'
export const fetchTeamRequest = () => ({
  type: FETCH_TEAM_REQUEST
})

export const FETCH_TEAM_SUCCESS = 'FETCH_TEAM_SUCCESS'
export const fetchTeamSuccess = team => ({
  type: FETCH_TEAM_SUCCESS,
  team
})

export const FETCH_TEAM_ERROR = 'FETCH_TEAM_ERROR'
export const fetchTeamError = err => ({
  type: FETCH_TEAM_ERROR,
  err
})