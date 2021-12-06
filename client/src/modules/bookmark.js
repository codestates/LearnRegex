const SAVE_BOOKMARK = 'SAVE_BOOKMARK';

export const saveBookmark = (index) => ({ type: SAVE_BOOKMARK, index });

const initialState = { index: 0 };

export default function bookmark(state = initialState, action) {
  switch (action.type) {
    case SAVE_BOOKMARK:
      return {
        ...state,
        index: action.index,
      };
    default:
      return state;
  }
}
