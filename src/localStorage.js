
export const findAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
  try {
    localStorage.setItem('authToken', authToken);
  } catch (e) { }
};


/**
 Resources:
 https://auth0.com/docs/security/store-tokens
 */