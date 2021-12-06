const SAVE_ANSWER = 'SAVE_ANSWER';

export const saveAnswer = (text) => ({ type: SAVE_ANSWER, text });

const initialState = { text: '' };

export default function answer(state = initialState, action) {
  switch (action.type) {
    case SAVE_ANSWER:
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
}
