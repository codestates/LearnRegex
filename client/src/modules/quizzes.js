import axios from 'axios';
axios.defaults.withCredentials = true;

const GET_QUIZZES = 'GET_QUIZZES';
const GET_QUIZZES_SUCCESS = 'GET_QUIZZES_SUCCESS';
const GET_QUIZZES_ERROR = 'GET_QUIZZES_ERROR';

export const getQuizzes = () => async (dispatch) => {
  dispatch({ type: GET_QUIZZES });
  try {
    const list = await axios.get(`http://localhost:4000/quiz`);
    // TODO: get 요청으로 받아온 data를 이쁘게 배열 형식으로 list에 할당하기!
    dispatch({ type: GET_QUIZZES_SUCCESS, list });
  } catch (e) {
    dispatch({ type: GET_QUIZZES_ERROR, error: e });
  }
};

const initialState = {
  list: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function quizzes(state = initialState, action) {
  switch (action.type) {
    case GET_QUIZZES:
      return {
        ...state,
        list: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_QUIZZES_SUCCESS:
      return {
        ...state,
        list: {
          loading: true,
          data: action.list,
          error: null,
        },
      };
    case GET_QUIZZES_ERROR:
      return {
        ...state,
        list: {
          loading: true,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
