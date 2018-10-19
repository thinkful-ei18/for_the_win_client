import * as actions from '../actions/draft.actions';

const initialState = {
  players:[],
  team:[],
  filteredTeam: [],
  allNBATeams: [
    'ATL Atlanta Hawks',
    'BOS Boston Celtics',
    'BRO Brooklyn Nets',
    'CHA Charlotte Hornets',
    'CHI Chicago Bulls',
    'CLE Cleveland Cavaliers',
    'Dallas Mavericks',
    'DEN Denver Nuggets',
    'DET Detroit Pistons',
    'GSW Golden State Warriors',
    'HOU Houston Rockets',
    'IND Indiana Pacers',
    'LAC Los Angeles Clippers',
    'LAL Los Angeles Lakers',
    'MEM Memphis Grizzlies',
    'MIA Miami Heat',
    'MIL Milwaukee Bucks',
    'MIN Minnesota Timberwolves',
    'NOP New Orleans Pelicans',
    'NYK New York Knicks',
    'OKL Oklahoma City Thunder',
    'ORL Orlando Magic',
    'PHI Philadelphia 76ers',
    'PHX Phoenix Suns',
    'POR Portland Trail Blazers',
    'SAC Sacramento Kings',
    'SAS San Antonio Spurs',
    'TOR Toronto Raptors',
    'UTA Utah Jazz',
    'WAS Washington Wizards'
  ],
  loading: false,
  error: null
}

export const draftReducer = (state=initialState, action) => {

  if(action.type === actions.FETCH_NBA_PLAYERS_REQUEST) {
    return {
      ...state,
      loading: true,
      error: false
    }
  }

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
