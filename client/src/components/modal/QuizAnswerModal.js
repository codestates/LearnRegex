import React from 'react';
import { Background, ModalWrapper, ModalContent, CloseModalButton } from './UserInfoModalElements';

const QuizAnswerModal = ({ openModal, setOpenModal, answer, explanation }) => {
  return (
    <>
      {openModal ? (
        <Background>
          <ModalWrapper>
            <ModalContent>
              <CloseModalButton onClick={() => setOpenModal(false)} />
              <div>{answer}</div>
              <div>{explanation}</div>
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default QuizAnswerModal;
