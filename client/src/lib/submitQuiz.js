import axios from 'axios';
axios.defaults.withCredentials = true;

export function submitQuiz(data, content) {
  // TODO: 한 칸이라도 비워져있으면 빨간 테두리 + 살짝 진동 애니메이션
  const isValid = (content) => content.title !== '' && content.testCase !== '' && content.testCaseTarget !== '' && content.answer !== '' && content.explanation !== '';
  // console.log(isValid(content));
  if (!isValid(content)) return alert('모든 항목에 입력하세요!!');
  if (!!data) {
    // TODO: PATCH 요청 보내기 - http://localhost:4000/quiz/edit
    console.log('----- PATCH 요청 -----');
    console.log(content);
    console.log('----- PATCH 요청 -----');
    alert('퀴즈 수정 되었습니다!');
    // ! 해당 퀴즈로 다시 돌아가면서 새로고침됨
    // document.location.href = `/quiz/${data.id}`;
  } else {
    // TODO: POST 요청 보내기 - http://localhost:4000/quiz/add
    console.log('----- POST 요청 -----');
    console.log(content);
    console.log('----- POST 요청 -----');
    alert('퀴즈 등록 되었습니다!');
    // ! 퀴즈 리스트로 다시 돌아가면서 새로고침됨
    // document.location.href = `/quizlist`;
  }
}
