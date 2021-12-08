import React, { useState } from 'react';
import { Background, ModalWrapper, ModalContent, CloseModalButton } from './UserInfoModalElements';
import SignIn from '../user/SignIn';
import SignUp from '../user/SignUp';
import AlertModal from './AlertModal';
import FindPasswordModal from './FindPasswordModal';
import EmailCertModal from './EmailCertModal';

const UserInfoModal = ({ openModal, setOpenModal, handleModal }) => {
  const [modalState, setModalState] = useState('signIn');

  const SetContent = () => {
    if (modalState === 'signIn') return <SignIn setModalState={setModalState} handleModal={handleModal} />;
    else if (modalState === 'signUp') return <SignUp setModalState={setModalState} />;
    else if (modalState === 'alert') return <AlertModal setModalState={setModalState} />;
    else if (modalState === 'findPassword') return <FindPasswordModal setModalState={setModalState} />;
    else if (modalState === 'emailCertAlert') return <EmailCertModal setModalState={setModalState} />;
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
