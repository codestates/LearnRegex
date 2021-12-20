const SET_MODAL = 'SET_MODAL';

export const setModal = (modalType) => ({ type: SET_MODAL, modalType });

const initialState = { modalType: 'close' };

export default function modal(state = initialState, action) {
  switch (action.type) {
    case SET_MODAL:
      return {
        modalType: action.modalType,
      };
    default:
      return state;
  }
}
