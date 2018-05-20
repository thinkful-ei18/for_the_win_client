import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import { draftReducer } from './reducers/draft.reducers';
import { statsReducer } from './reducers/statsReducer';
import { teamReducer } from './reducers/team.reducers';
import { userReducer } from './reducers/userReducer';
import { gamesReducer } from './reducers/gamesReducer';
import { leagueReducer } from './reducers/leagueReducer';


const rootReducer = combineReducers({
  form: formReducer,
  draftReducer,
  statsReducer,
  teamReducer,
  userReducer,
  gamesReducer,
  leagueReducer
});

// export default createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, 
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;