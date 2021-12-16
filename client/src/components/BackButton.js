import { ImArrowLeft2 } from 'react-icons/im';

export default function BackButton({ id = '0' }) {
  const historyBack = () => {
    // if (id === '0') window.location.replace('/quizlist');
    // else window.location.replace(`/quiz/${id}`);
    if (id === '0') window.location.href = '/quizlist';
    else window.location.href = `/quiz/${id}`;
  };

  return (
    <>
      <ImArrowLeft2 size="50" onClick={historyBack} />
    </>
  );
}
