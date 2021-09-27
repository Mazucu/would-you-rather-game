import React, { useState } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { ButtonGroup, Button } from "@material-ui/core";

function Home({ AnsweredQuestions, UnansweredQuestions }) {
  const [questions, setQuestions] = useState(UnansweredQuestions);
  const handleClick = (questions) => {
    if (questions) {
      return setQuestions(questions);
    }
  };

  let inputStyle = { backgroundColor: "#7a61e9", color: "white" };

  return (
    <div>
      <ButtonGroup
        fullWidth
        color="primary"
        aria-label="outlined primary button group"
      >
        <Button
          onClick={() => handleClick(AnsweredQuestions)}
          style={questions === AnsweredQuestions ? inputStyle : {}}
        >
          Answered
        </Button>
        <Button
          style={questions === UnansweredQuestions ? inputStyle : {}}
          onClick={() => handleClick(UnansweredQuestions)}
        >
          Unanswered
        </Button>
      </ButtonGroup>
      {questions.map((a) => {
        return (
          <Question
            key={a}
            id={a}
            isAnswered={AnsweredQuestions.includes(a)}
          ></Question>
        );
      })}
    </div>
  );
}

function mapStateToProps({ questions, users, loggedUser }) {
  const answeredQuestions = Object.keys(users[loggedUser].answers);
  return {
    AnsweredQuestions: answeredQuestions.sort((a, b) => {
      return questions[b].timestamp - questions[a].timestamp;
    }),
    UnansweredQuestions: Object.keys(questions)
      .filter((questiondId) => {
        return !answeredQuestions.includes(questiondId);
      })
      .sort((a, b) => {
        return questions[b].timestamp - questions[a].timestamp;
      }),
  };
}

export default connect(mapStateToProps)(Home);
