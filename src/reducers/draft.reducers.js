import * as actions from '../actions/draft.actions';

const initialState = {
  players:[],
  team:[],
  filteredTeam: [],
  allNBATeams: [
    'Atlanta Hawks',
    'Boston Celtics',
    'Brooklyn Nets',
    'Charlotte Hornets',
    'Chicago Bulls',
    'Cleveland Cavaliers',
    'Dallas Mavericks',
    'Denver Nuggets',
    'Detroit Pistons',
    'Golden State Warriors',
    'Houston Rockets',
    'Indiana Pacers',
    'Los Angeles Clippers',
    'Los Angeles Lakers',
    'Memphis Grizzlies',
    'Miami Heat',
    'Milwaukee Bucks',
    'Minnesota Timberwolves',
    'New Orleans Pelicans',
    'New York Knicks',
    'Oklahoma City Thunder',
    'Orlando Magic',
    'Philadelphia 76ers',
    'Phoenix Suns',
    'Portland Trail Blazers',
    'Sacramento Kings',
    'San Antonio Spurs',
    'Toronto Raptors',
    'Utah Jazz',
    'Washington Wizards'
  ],
  loading: false,
  error: null
}

export const draftReducer = (state=initialState, action) => {
  if (action.type === actions.FETCH_NBA_PLAYERS_SUCCESS) {
    return{
      ...state,
      loading: false,
      error: null,
      players: action.players
    }
  } 

  if (action.type === actions.FETCH_ADD_PLAYERS_TO_TEAM_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: null,
      team: action.team
    }
  } 

  if (action.type === actions.FETCH_REMOVE_PLAYERS_FROM_TEAM_REQUEST_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: null,
      team: action.team
    }
  } 

  if (action.type === actions.FILTER_NBA_PLAYERS_BY_TEAM_REQUEST) {
    return {
      ...state,
      filteredTeam: [],
      loading: false,
      error: null,
    }
  }

  if (action.type === actions.FILTER_NBA_PLAYERS_BY_TEAM_SUCCESS) {
    return {
      ...state,
      filteredTeam: action.filteredTeam,
      loading: false,
      error: null,
    }
  } 

  return state;
} 
