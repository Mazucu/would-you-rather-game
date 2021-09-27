import {
  RECEIVE_QUESTIONS,
  VOTE_QUESTION,
  SAVE_QUESTION,
} from "../Actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case VOTE_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          timestamp: action.timestamp,
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat(
              action.authedUser
            ),
          },
        },
      };
    case SAVE_QUESTION:
      return {
        ...state,
        [action.id]: action.question,
      };
    default:
      return state;
  }
}
