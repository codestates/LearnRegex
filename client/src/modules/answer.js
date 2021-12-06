const SAVE_ANSWER = 'SAVE_ANSWER';
const RESET_ANSWER = 'RESET_ANSWER';

export const saveAnswer = (text) => ({
  type: SAVE_ANSWER,
  text,
});

export const resetAnswer = () => ({ type: RESET_ANSWER });

const initialState = { text: '' };

export default function answer(state = initialState, action) {
  switch (action.type) {
    case SAVE_ANSWER:
      return {
        ...state,
        text: action.text,
      };
    case RESET_ANSWER:
      return initialState;
    default:
      return state;
  }
}
