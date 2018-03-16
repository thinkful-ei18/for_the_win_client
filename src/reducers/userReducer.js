import * as actions from '../actions/userActions';

const initialState = {
  loggedIn: false
}

export const userReducer = (state = initialState, action) => {

  if (action.type === actions.USER_CREATED) {
    return {
      ...state,
      loggedIn: true
    }
  }

  return state;
} 
