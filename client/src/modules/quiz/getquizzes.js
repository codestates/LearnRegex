import { checkIsLogin } from '../../lib/checkIsLogin';
import axios from 'axios';
axios.defaults.withCredentials = true;

const GET_QUIZZES = 'GET_QUIZZES';
const GET_QUIZZES_SUCCESS = 'GET_QUIZZES_SUCCESS';
const GET_QUIZZES_ERROR = 'GET_QUIZZES_ERROR';

export const getQuizzes = (idx) => async (dispatch) => {
  dispatch({ type: GET_QUIZZES, idx });
  try {
    const result = await axios.get(`${process.env.REACT_APP_SERVER_ADDR}/quiz`);
    const list = result.data.quizs;
    checkIsLogin(result);
    dispatch({ type: GET_QUIZZES_SUCCESS, list });
  } catch (error) {
    // 에러코드 406이면 재귀
    console.log('??');
    if (error.response.status === 406) dispatch(getQuizzes());
    else {
      checkIsLogin(error);
      dispatch({ type: GET_QUIZZES_ERROR, error });
    }
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
