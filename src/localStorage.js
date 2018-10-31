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
export const findUsersLeague = () => {
  try {
    return localStorage.getItem('UsersLeague')
  }
  catch (e) {}
}

export const saveUsersLeague = (leagueName, draftSchedule) => {
  try {
    localStorage.setItem('UsersLeague', JSON.stringify({leagueName, draftSchedule}));
  }
  catch (e) {}
}

export const deleteUsersLeague = () => {
  try {
    localStorage.removeItem('UsersLeague');
  }
  catch (e) {}
}

/*
 Resources:
  - https://auth0.com/docs/security/store-tokens
 */