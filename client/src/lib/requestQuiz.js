import { checkIsLogin } from '../lib/checkIsLogin';
import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

// 퀴즈 삭제 요청
export function deleteQuiz(id) {
  // console.log('deleteQuiz 함수당');
  // console.log(id);
  axios
    .delete(`${process.env.REACT_APP_SERVER_ADDR}/quiz?quizId=${id}`)
    .then((res) => {
      alert('퀴즈 삭제되었습니다!');
      document.location.href = `/quizlist`;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function submitQuiz(data, content) {
  // console.log(content);
  // console.log(data);

  const isValid = (content) => content.title !== '' && content.testCase !== '' && content.testCaseTarget !== '' && content.answer !== '' && content.explanation !== '';
  // console.log(isValid(content));

  if (!isValid(content)) return alert('모든 항목에 입력하세요!!'); // TODO: 한 칸이라도 비워져있으면 빨간 테두리 + 살짝 진동 애니메이션

  // 퀴즈 수정 요청
  if (!!data) {
    axios
      .patch(`${process.env.REACT_APP_SERVER_ADDR}/quiz?quizId=${data.id}`, content)
      .then((res) => {
        console.log('patch 요청 성공');
        alert('퀴즈 수정 되었습니다!');
        document.location.href = `/quiz/${data.id}`;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // 퀴즈 등록 요청
  else {
    axios
      .post(`${process.env.REACT_APP_SERVER_ADDR}/quiz`, content)
      .then((res) => {
        checkIsLogin(res);
        console.log('post 요청 성공');
        alert('퀴즈 등록 되었습니다!');
        document.location.href = `/quizlist`;
      })
      .catch((err) => {
        checkIsLogin(err);
        console.log(err);
      });
  }
}

export const requestQuizClear = async (quizId) => {
  console.log(quizId);
  if (!quizId) return;
  try {
    const result = await axios.post(`${process.env.REACT_APP_SERVER_ADDR}/quiz/clear?quizId=${quizId}`);
    checkIsLogin(result);
    console.log(result);
    console.log('requestQuizClear!!');
    return true;
  } catch (error) {
    checkIsLogin(error);
    console.log(error.response.data.message);
    return false;
  }
};
