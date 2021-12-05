const SAVE_BOOKMARK = 'SAVE_BOOKMARK';

export const saveBookmark = (index) => ({ type: 'SAVE_BOOKMARK', index });

export default function bookmark(state = {}, action) {
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
