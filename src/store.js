import { createStore } from 'redux';

import { draftReducer } from './reducers/draft.reducers';

export default createStore(draftReducer);