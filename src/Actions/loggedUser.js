export const SET_LOGGED_USER = "SET_LOGGED_USER";

export function loggedUser(username) {
  return {
    type: SET_LOGGED_USER,
    username,
  };
}
