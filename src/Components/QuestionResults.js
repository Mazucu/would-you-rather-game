import React from "react";
import { connect } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import PercentageBar from "./PercentageBar";

import Avatar from "./Avatar";

function QuestionResults({ questions, users, loggedUser }) {
  let { id } = useParams();
  if (!Object.keys(questions).includes(id)) {
    return <Redirect push to="/undefined" />;
  }

  const userAnswer = users[loggedUser].answers[id];

  const question = questions[id];
  const {
    author,
    optionOne: { text: optionOne, votes: votesOptionOne },
    optionTwo: { text: optionTwo, votes: votesOptionTwo },
  } = question;
  const { name: authorName, avatarURL } = users[author];

  const totalVotes = votesOptionOne.length + votesOptionTwo.length;

  return (
    <div className="question">
      <h2 className="question-title">Asked by {authorName}</h2>
      <div className="inner-question">
        <Avatar url={avatarURL} name={authorName} />
        <div className="inner-question-content">
          <h2>Results:</h2>
          <PercentageBar
            number={votesOptionOne.length}
            total={totalVotes}
            name={optionOne}
            selectedOption={"optionOne" === userAnswer}
          />
          <PercentageBar
            number={votesOptionTwo.length}
            total={totalVotes}
            name={optionTwo}
            selectedOption={"optionTwo" === userAnswer}
          />
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
export default connect(mapStateToProps)(QuestionResults);
