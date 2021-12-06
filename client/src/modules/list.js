import { dummyData } from '../data/tutorialData';

const CLEAR_LIST = 'CLEAR_LIST';
const RESET_LIST = 'RESET_LIST';

export const clearList = (index) => ({ type: CLEAR_LIST, index });

export const resetList = () => ({ type: RESET_LIST });

const initialState = new Array(dummyData.length).fill(false);

export default function list(state = initialState, action) {
  switch (action.type) {
    case CLEAR_LIST:
      return state.map((el, idx) => (idx === action.index ? true : el));
    case RESET_LIST:
      return initialState;
    default:
      return state;
  }
}
