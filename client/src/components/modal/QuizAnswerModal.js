import React from 'react';
import { Background, ModalWrapper, ModalContent, CloseModalButton } from './UserInfoModalElements';
import SignIn from '../user/SignIn';

const QuizAnswerModal = ({ openModal, setOpenModal }) => {
  return (
    <>
      {openModal ? (
        <Background>
          <ModalWrapper>
            <ModalContent>
              <CloseModalButton onClick={() => setOpenModal(false)} />
              <SignIn />
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default QuizAnswerModal;
