const SAVE_ANSWER_TUTORIAL = 'SAVE_ANSWER_TUTORIAL';
const SAVE_ANSWER_QUIZ = 'SAVE_ANSWER_QUIZ';
const RESET_ANSWER_TUTORIAL = 'RESET_ANSWER_TUTORIAL';

export const saveAnswerTutorial = (id, text) => ({ type: SAVE_ANSWER_TUTORIAL, payload: { [id]: text } });
export const saveAnswerQuiz = (id, text) => ({ type: SAVE_ANSWER_QUIZ, payload: { [id]: text } });
export const resetAnswerTutorial = () => ({ type: RESET_ANSWER_TUTORIAL });

const initialState = { tutorial: {}, quiz: {} };

export default function answer(state = initialState, action) {
  let targetId = '';
  if (Object.prototype.toString.call(action.payload) === '[object Object]') targetId = Object.keys(action.payload)[0];
  switch (action.type) {
    case SAVE_ANSWER_TUTORIAL:
      return {
        ...state,
        tutorial: { ...state.tutorial, [targetId]: action.payload[targetId] },
      };
    case SAVE_ANSWER_QUIZ:
      return {
        ...state,
        quiz: { ...state.quiz, [targetId]: action.payload[targetId] },
      };
    case RESET_ANSWER_TUTORIAL:
      return {
        ...state,
        tutorial: {},
      };
    default:
      return state;
  }
}
