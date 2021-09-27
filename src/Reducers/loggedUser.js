import { SET_LOGGED_USER } from "../Actions/loggedUser";

export function loggedUser(state = null, action) {
  switch (action.type) {
    case SET_LOGGED_USER:
      const username = action.username;
      return username;

    default:
      return state;
  }
}
