import axios from 'axios';
axios.defaults.withCredentials = true;

const GET_QUIZ = 'GET_QUIZ';
const GET_QUIZ_SUCCESS = 'GET_QUIZ_SUCCESS';
const GET_QUIZ_ERROR = 'GET_QUIZ_ERROR';

export const getQuiz = (id) => async (dispatch) => {
  dispatch({ type: GET_QUIZ });
  try {
    const quiz = await (await axios.get(`http://localhost:4000/quiz/info?quizId=${id}`)).data.quiz;
    // console.log(quiz);
    dispatch({ type: GET_QUIZ_SUCCESS, quiz });
  } catch (e) {
    dispatch({ type: GET_QUIZ_ERROR, error: e });
  }
};

const initialState = {
  quiz: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function quiz(state = initialState, action) {
  switch (action.type) {
    case GET_QUIZ:
      return {
        ...state,
        quiz: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_QUIZ_SUCCESS:
      return {
        ...state,
        quiz: {
          loading: true,
          data: action.quiz,
          error: null,
        },
      };
    case GET_QUIZ_ERROR:
      return {
        ...state,
        quiz: {
          loading: true,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}