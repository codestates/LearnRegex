import { dummyData } from '../data/tutorialData';

const CLEAR_LIST = 'CLEAR_LIST';

export const clearList = (index) => ({ type: 'CLEAR_LIST', index });

const initialState = new Array(dummyData.length).fill(false);

export default function list(state = initialState, action) {
  switch (action.type) {
    case CLEAR_LIST:
      return state.map((el, idx) => (idx === action.index ? true : el));
    default:
      return state;
  }
}
