/* ========================= AUTH TOKEN ========================= */
export const findAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
  try {
    localStorage.setItem('authToken', authToken);
  } 
  catch (e) { }
};

export const deleteAuthToken = () => {
  try {
    localStorage.removeItem('authToken');
  } 
  catch (e) { }
};


/* ========================= LEAGUE NAME ========================= */
export const findLeagueName = () => {
  try {
    return localStorage.getItem('leagueName')
  }
  catch (e) {}
}

export const saveLeagueName = leagueName => {
  try {
    localStorage.setItem('leagueName', leagueName);
  }
  catch (e) {}
}


/*
 Resources:
  - https://auth0.com/docs/security/store-tokens
 */