import { combineReducers } from "redux";
import questions from "./questions";
import users from "./users";
import { loggedUser } from "./loggedUser";

export default combineReducers({ questions, users, loggedUser });
