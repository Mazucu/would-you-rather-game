import { saveQuestionAnswer, saveQuestion } from "../utils/api";
import { addAnswerToUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const VOTE_QUESTION = "VOTE_QUESTION";
export const SAVE_QUESTION = "SAVE_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function saveAnswer({ authedUser, qid, answer, timestamp }) {
  return { type: VOTE_QUESTION, authedUser, qid, answer, timestamp };
}

export function handleSaveAnswer(info) {
  return (dispatch) => {
    return saveQuestionAnswer(info)
      .then(() => {
        dispatch(saveAnswer(info));
        dispatch(addAnswerToUser(info));
      })
      .catch(() => {
        console.warn("You answer could no be saved");
      });
  };
}

export function saveNewQuestion(question) {
  return {
    type: SAVE_QUESTION,
    id: question.id,
    question,
  };
}

export function handleSaveNewQuestion(questionRaw) {
  return (dispatch) => {
    return saveQuestion(questionRaw)
      .then((question) => {
        dispatch(saveNewQuestion(question));
      })
      .catch(() => console.warn("Question could not be saved"));
  };
}
