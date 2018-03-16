import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import { draftReducer } from './reducers/draft.reducers';
import { statsReducer } from './reducers/statsReducer';
import { teamReducer } from './reducers/team.reducers';

const rootReducer = combineReducers({
  form: formReducer,
  draftReducer,
  statsReducer,
  teamReducer
});

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
);