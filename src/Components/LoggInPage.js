import React, { useState } from "react";
import { connect } from "react-redux";
import { loggedUser } from "../Actions/loggedUser";
function LogginPage({ users, dispatch }) {
  const [userName, setUserName] = useState("");
  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    dispatch(loggedUser(userName));
  };

  return (
    <div className="new-question">
      <h2 className="new-question-title">
        Welcome to the Would You Rather App
      </h2>
      <h3 className="new-question-title"> Please sign in to continue</h3>
      <div className="new-inner-question center">
        <img src="Logo.png" className="logo" alt="logo" />

        <h3 style={{ color: "#9b88ee" }}>Sign in</h3>
        <form>
          <select onChange={handleChange} defaultValue="">
            <option value="" hidden="hidden" disabled>
              Select User
            </option>
            <option value="johndoe">John Doe</option>
            <option value="sarahedo">Sarah Edo</option>

            <option value="tylermcginnis">Tyler McGinnis</option>
          </select>
        </form>
        <button className="btn new" onClick={handleSubmit}>
          Sign In
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};
export default connect(mapStateToProps)(LogginPage);
