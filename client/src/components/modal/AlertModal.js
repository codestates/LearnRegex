import React from 'react';
import { Background, ModalWrapper, ModalContent, CloseModalButton } from './UserInfoModalElements';

const AlertModal = ({ openModal, setOpenModal }) => {
  return (
    <>
      {openModal ? (
        <Background>
          <ModalWrapper>
            <ModalContent>
              <CloseModalButton onClick={() => setOpenModal(false)} />
              <div>Hello Alert Modal!</div>
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default AlertModal;
