import React from 'react';

// import QuizList from './pages/QuizList'; // 확인을 위해 넣어둔 코드임! 삭제해도 괜찮음
import QuizForm from './components/QuizForm';

function App() {
  return (
    <div>
      HelloWorld
      {/* <QuizList /> // 확인을 위해서 넣어둔 코드임! 삭제해도 괜찮음 */}
      <QuizForm />
    </div>
  );
}

export default App;

// TODO: 각 페이지 route 연결
