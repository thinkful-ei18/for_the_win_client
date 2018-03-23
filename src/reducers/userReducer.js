import * as actions from '../actions/userActions';

const initialState = {
  loggedIn: false,
  user: false,
  authToken: null,
  loading: false,
  error: null
}

export const userReducer = (state = initialState, action) => {

  if (action.type === actions.CREATE_USER_SUCCESS) {
    return {
      ...state,
      user: true
    }
  }

  if (action.type === actions.LOGIN_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    };
  } 
  
  if (action.type === actions.LOGIN_SUCCESS) {
    return {
      ...state,
      loading: false,
      user: action.user
    };
  }
  
  if (action.type === actions.LOGIN_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }
  
  if (action.type === actions.SET_AUTH_TOKEN) {
    return {
      ...state,
      authToken: action.authToken
    };
  }

  if (action.type === actions.CHECK_USER_AUTH_SUCCESS) {
    return {
      ...state,
      authToken: action.authToken
    };
  }

  if (action.type === actions.LOGOUT_SUCCESS) {
    return {
      ...state,
      loggedIn: false,
      user: false,
      authToken: null,
      loading: false,
      error: null
    };
  }

  return state;
} 
