import React from "react";
import { connect } from "react-redux";
import BoardUnit from "./BoardUnit";

function Board({ users }) {
  return (
    <div>
      {users.map((user) => {
        let position = users.indexOf(user);

        return (
          <BoardUnit key={user} user={user} position={position}></BoardUnit>
        );
      })}
    </div>
  );
}

const mapStateToProps = ({ users }) => {
  const getScore = (user) => {
    const { questions, answers } = users[user];
    const numberOfQuestions = questions.length;
    const numberOfAnswers = Object.keys(answers).length;
    return numberOfQuestions + numberOfAnswers;
  };
  return {
    users: Object.keys(users).sort((userA, userB) => {
      return getScore(userB) - getScore(userA);
    }),
  };
};
export default connect(mapStateToProps)(Board);
