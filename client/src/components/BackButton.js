import { ImArrowLeft2 } from 'react-icons/im';

export function BackButton() {
  const historyBack = () => {
    window.history.back();
  };

  return (
    <>
      <ImArrowLeft2 size="50" onClick={historyBack} />
    </>
  );
}
