import axios from 'axios';
axios.defaults.withCredentials = true;

export function deleteQuiz(id) {
  // console.log('deleteQuiz 함수당');
  // console.log(id);
  axios
    .delete(`http://localhost:4000/quiz?quizId=${id}`)
    .then((res) => {
      document.location.href = `/quizlist`;
    })
    .catch((err) => {
      console.log(err);
    });
}
