import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { draftReducer } from './reducers/draft.reducers';

export default createStore(
  draftReducer,
  applyMiddleware(thunk)
);