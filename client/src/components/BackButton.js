import styled from 'styled-components';
import { ImArrowLeft2 } from 'react-icons/im';

export const BackButtonIcon = styled(ImArrowLeft2)`
  font-size: 3.8rem;
  cursor: pointer;
  transition: all ease 0.4s;
  color: var(--color-dark-gray);

  :hover {
    color: var(--color-dark-blue);
  }

  @media screen and (max-width: 963px) {
    font-size: 3rem;
  }
`;

export default function BackButton({ id = '0' }) {
  const historyBack = () => {
    // if (id === '0') window.location.replace('/quizlist');
    // else window.location.replace(`/quiz/${id}`);
    if (id === '0') window.location.href = '/quizlist';
    else window.location.href = `/quiz/${id}`;
  };

  return (
    <>
      <BackButtonIcon size="50" onClick={historyBack} />
    </>
  );
}
