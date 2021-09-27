import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { loggedUser } from "../Actions/loggedUser";
import Avatar from "./Avatar";

function Nav({ user, dispatch }) {
  const { name, avatarURL } = user;

  const handleLogOut = () => {
    dispatch(loggedUser(""));
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink activeClassName="active" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/new-question" activeClassName="active">
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to="/board" activeClassName="active">
            Board
          </NavLink>
        </li>
        <li> </li>
        {name && (
          <>
            <li>Hello, {name}</li>
            <li>
              <Avatar url={avatarURL} small="true"></Avatar>
            </li>
            <li onClick={handleLogOut}>Log Out</li>
          </>
        )}
      </ul>
    </nav>
  );
}

const mapStateToProps = ({ loggedUser, users }) => ({
  user: users[loggedUser],
});

export default connect(mapStateToProps)(Nav);
