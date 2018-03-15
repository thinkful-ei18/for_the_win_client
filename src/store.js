import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { draftReducer } from './reducers/draft.reducers';
// import { statsReducer } from './reducers/stats.reducers';
import { teamReducer } from './reducers/team.reducers';

const rootReducer = combineReducers({
  draftReducer,
  // statsReducer,
  teamReducer
});

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
);