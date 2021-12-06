import axios from 'axios';
axios.defaults['withCredentials'] = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

const requestQuizClear = async (quizId) => {
  if (!quizId) return;
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_SERVER_ADDR}/quiz/clear`, //
      { quizId }
    );
    console.log(result);
    return true;
  } catch (error) {
    console.log(error.response.data.message);
    return false;
  }
};

export default requestQuizClear;
