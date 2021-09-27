import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Avatar from "./Avatar";

function Question({ questions, users, id, isAnswered }) {
  const question = questions[id];
  const { author, optionOne } = question;
  const user = users[author];
  const { name, avatarURL } = user;

  const history = useHistory();

  function handleClick() {
    if (isAnswered) {
      history.push(`/question-results/${id}`);
    } else {
      history.push(`/question-form/${id}`);
    }
  }
  return (
    <div className="question">
      <h2 className="question-title"> {name} asks: </h2>
      <div className="inner-question">
        <Avatar url={avatarURL} name={name} />
        <div className="inner-question-content">
          <h3>Would you rather</h3>
          <h4>{optionOne.text}</h4>
          <button className="btn" onClick={handleClick}>
            View Poll
          </button>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ questions, users }, id) {
  //console.log("the state is", state);
  return { questions, users };
}
export default connect(mapStateToProps)(Question);
