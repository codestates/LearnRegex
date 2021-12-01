import axios from 'axios';

const GET_QUIZ = 'GET_QUIZ';
const GET_QUIZ_SUCCESS = 'GET_QUIZ_SUCCESS';
const GET_QUIZ_ERROR = 'GET_QUIZ_ERROR';

export const getQuiz = (id) => async (dispatch) => {
  dispatch({ type: GET_QUIZ });
  try {
    const quiz = await axios.get(`http://localhost:4000/quiz/info?quizId=${id}`);
    // TODO: quiz에 getQuiz 응답 받은 데이터 예쁘게 할당하기!!
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
