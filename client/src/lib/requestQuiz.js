import { checkIsLogin } from '../lib/checkIsLogin';
import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

// 퀴즈 * 삭제 요청
export function deleteQuiz(id) {
  axios
    .delete(`${process.env.REACT_APP_SERVER_ADDR}/quiz?quizId=${id}`)
    .then((res) => {
      document.location.href = `/quizlist`;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function submitQuiz(data, content) {
  // * 퀴즈 수정 요청
  if (!!data) {
    axios
      .patch(`${process.env.REACT_APP_SERVER_ADDR}/quiz?quizId=${data.id}`, content)
      .then((res) => {
        document.location.href = `/quiz/${data.id}`;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // * 퀴즈 등록 요청
  else {
    axios
      .post(`${process.env.REACT_APP_SERVER_ADDR}/quiz`, content)
      .then((res) => {
        checkIsLogin(res);
        document.location.href = `/quizlist`;
      })
      .catch((err) => {
        checkIsLogin(err);
        console.log(err);
      });
  }
}

// * 퀴즈 문제 풀었을 때 요청
export const requestQuizClear = async (quizId) => {
  if (!quizId) return;
  try {
    const result = await axios.post(`${process.env.REACT_APP_SERVER_ADDR}/quiz/clear?quizId=${quizId}`);
    checkIsLogin(result);
    return true;
  } catch (error) {
    checkIsLogin(error);
    return false;
  }
};
