import axios from 'axios';
axios.defaults.withCredentials = true;

export function submitQuiz(data, content) {
  if (!!data) {
    // TODO: PATCH 요청 보내기 - http://localhost:4000/quiz/edit
  } else {
    // TODO: POST 요청 보내기 - http://localhost:4000/quiz/add
  }
}
