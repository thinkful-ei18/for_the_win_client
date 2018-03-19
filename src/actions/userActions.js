import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';


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

