import React, { useState } from 'react';
import { Background, ModalWrapper, ModalContent, CloseModalButton } from './UserInfoModalElements';
import SignIn from '../user/SignIn';
import SignUp from '../user/SignUp';
import AlertModal from './AlertModal';

const UserInfoModal = ({ openModal, setOpenModal }) => {
  const [modalState, setModalState] = useState('signIn');

  const SetContent = () => {
    if (modalState === 'signIn') return <SignIn setModalState={setModalState} />;
    else if (modalState === 'signUp') return <SignUp setModalState={setModalState} />;
    else if (modalState === 'signUpAlert') return <AlertModal setModalState={setModalState} />;
  };

  return (
    <>
      {openModal ? (
        <Background>
          <ModalWrapper>
            <ModalContent>
              <CloseModalButton onClick={() => setOpenModal(false)} />
              <SetContent />
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default UserInfoModal;
