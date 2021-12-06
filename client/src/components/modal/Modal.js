import React from 'react';
import { Background, ModalWrapper, ModalContent, CloseModalButton } from './ModalElements';
import SignIn from '../user/SignIn';

const Modal = ({ openModal, setOpenModal }) => {
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

export default Modal;
