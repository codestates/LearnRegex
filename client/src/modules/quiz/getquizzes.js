import { checkIsLogin } from '../../lib/checkIsLogin';
import axios from 'axios';
axios.defaults.withCredentials = true;

const GET_QUIZZES = 'GET_QUIZZES';
const GET_QUIZZES_SUCCESS = 'GET_QUIZZES_SUCCESS';
const GET_QUIZZES_ERROR = 'GET_QUIZZES_ERROR';

export const getQuizzes = (idx) => async (dispatch) => {
  dispatch({ type: GET_QUIZZES, idx });
  try {
    const result = await axios.get(`${process.env.REACT_APP_SERVER_ADDR}/quiz?page=${idx + 1}`);
    const list = result.data.quizs;
    const pages = result.data.pages;
    checkIsLogin(result);
    setTimeout(() => {
      dispatch({ type: GET_QUIZZES_SUCCESS, list, pages });
    }, 1000);
  } catch (error) {
    // 에러코드 406이면 재귀
    if (error.response.status === 406) dispatch(getQuizzes());
    else {
      checkIsLogin(error);
      setTimeout(() => {
        dispatch({ type: GET_QUIZZES_ERROR, error });
      }, 1000);
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
          list: action.list,
          pages: action.pages,
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
