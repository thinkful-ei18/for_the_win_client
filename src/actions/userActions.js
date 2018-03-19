import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';
import jwtDecode from 'jwt-decode';
import { saveAuthToken } from '../localStorage';


/* ========================= CREATE A NEW USER ========================= */
export const createUser = values => dispatch => {
  return fetch(`${API_BASE_URL}/register`, {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (res.statusText === "Created") {
      dispatch(createUserSuccess())
    }
    if(!res.ok) {
      if(res.body) {
        return res.json().then(err => Promise.reject(err));
      }
      return Promise.reject({
        code: res.status,
        message: res.statusText
      });
    }
    return;
  })
  .catch(err => {
    const { message } = err;
    return Promise.reject(
      new SubmissionError({
        _error: message
      })
    );
  });
}


export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST'
export const createUserRequest = () => ({
  type: CREATE_USER_REQUEST
})

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const createUserSuccess = () => ({
  type: CREATE_USER_SUCCESS
})

export const CREATE_USER_ERROR = 'CREATE_USER_ERROR'
export const createUserError = () => ({
  type: CREATE_USER_ERROR
})


/* ========================= LOGIN TO RECEIVE AUTHTOKEN ========================= */
export const login = (email, password) => dispatch => {
  dispatch(loginRequest());
  return (
    fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(res => {
      if (!res.ok) {
        if (res.body) {
          return res.json().then(err => Promise.reject(err));
        }
        return Promise.reject({
          code: res.status,
          message: res.statusText
        });
      }
      return res.json();
    })
    .then(({ authToken }) => storeAuthToken(authToken, dispatch))
    .catch(err => {
      const { status } = err.error;
      const message =
        status === 401
          ? 'Incorrect username or password'
          : 'Unable to login, please try again';
      dispatch(loginError(err.error));
      return Promise.reject(
        new SubmissionError({
          _error: message
        })
      );
    })
  );
};

const storeAuthToken = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(getAuthToken(authToken));
  dispatch(loginSuccess(decodedToken.user));
  saveAuthToken(authToken);
};

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user
});

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const loginError = error => ({
  type: LOGIN_ERROR,
  error
});

export const GET_AUTH_TOKEN = 'GET_AUTH_TOKEN';
export const getAuthToken = authToken => ({
  type: GET_AUTH_TOKEN,
  authToken
});