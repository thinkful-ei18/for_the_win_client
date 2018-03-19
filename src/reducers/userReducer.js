import * as actions from '../actions/userActions';

const initialState = {
  loggedIn: false,
  user: false
}

export const userReducer = (state = initialState, action) => {

  if (action.type === actions.CREATE_USER_SUCCESS) {
    return {
      ...state,
      user: true
    }
  }

  return state;
} 
