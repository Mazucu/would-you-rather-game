import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import Avatar from "./Avatar";
import { handleSaveAnswer } from "../Actions/questions";

function QuestionForm({ questions, users, loggedUser, dispatch }) {
  let { id } = useParams();
  const [answer, setAnswer] = useState();

  const question = questions[id];
  const {
    author,
    optionOne: { text: optionOne },
    optionTwo: { text: optionTwo },
  } = question;

  const { name: authorName, avatarURL } = users[author];

  const history = useHistory();

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Date.now());
    let timestamp = Date.now();

    dispatch(
      handleSaveAnswer({ authedUser: loggedUser, qid: id, answer, timestamp })
    );
    history.push(`/question-results/${id}`);
  };
  return (
    <div className="question">
      <h2 className="question-title"> {authorName} asks: </h2>
      <div className="inner-question">
        <Avatar url={avatarURL} name={authorName} />
        <div className="inner-question-content">
          <h2>Would You Rather...</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="options">
                <input
                  type="radio"
                  name="answer"
                  value="optionOne"
                  onChange={handleChange}
                ></input>
                {optionOne}
              </label>
              <br />
              <label className="options">
                <input
                  type="radio"
                  name="answer"
                  value="optionTwo"
                  onChange={handleChange}
                ></input>
                {optionTwo}
              </label>
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ questions, users, loggedUser }) {
  return {
    questions,
    users,
    loggedUser,
  };
}

export default connect(mapStateToProps)(QuestionForm);
