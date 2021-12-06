const SAVE_BOOKMARK = 'SAVE_BOOKMARK';
const RESET_BOOKMARK = 'RESET_BOOKMARK';

export const saveBookmark = (index) => ({ type: 'SAVE_BOOKMARK', index });

export const resetBookmark = () => ({ type: 'RESET_BOOKMARK' });

const initialState = { index: 0 };

export default function bookmark(state = initialState, action) {
  switch (action.type) {
    case SAVE_BOOKMARK:
      return {
        ...state,
        index: action.index,
      };
    case RESET_BOOKMARK:
      return initialState;
    default:
      return state;
  }
}
