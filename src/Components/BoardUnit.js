import React from "react";
import { connect } from "react-redux";
import Avatar from "./Avatar";
import Trophey from "./Trophey";

function BoardUnit({ users, user, position }) {
  const { avatarURL, name, questions, answers } = users[user];

  const numberOfQuestions = questions.length;
  const numberOfAnswers = Object.keys(answers).length;
  const score = numberOfQuestions + numberOfAnswers;
  return (
    <div className="question board">
      <Trophey position={position} />
      <div className="inner-question">
        <Avatar url={avatarURL} name={name} />
        <div className="inner-question-content flex">
          <div className="name-wrapper">
            <h1>{name}</h1>
            <table>
              <tbody>
                <tr>
                  <th>Answered Questions</th>
                  <th>{numberOfAnswers}</th>
                </tr>
                <tr>
                  <th>Created Questions</th>
                  <th>{numberOfQuestions}</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div className="score-wrapper">
              <div className="score-title">Score</div>
              <div style={{ height: "66%" }}>
                <div className="circle score">{score}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};
export default connect(mapStateToProps)(BoardUnit);
