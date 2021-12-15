import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../modules/modal';
import SignIn from '../user/SignIn';
import SignUp from '../user/SignUp';
import Alert from './Alert';
import QuizAnswer from './QuizAnswer';
import EmailCert from './EmailCert';
import FindPassword from '../user/FindPassword';
import DeleteUserConfirm from './DeleteUserConfirm';
import DeleteAnswerConfirm from './DeleteAnswerConfirm';

import { Background, ModalWrapper, ModalContent, CloseModalButton } from './index.styled';

const Modal = () => {
  const dispatch = useDispatch();

  const { modalType } = useSelector((state) => state.modal);

  const SetContent = () => {
    if (modalType === 'signIn') return <SignIn />;
    else if (modalType === 'signUp') return <SignUp />;
    else if (modalType === 'toHome') return <Alert func={modalType} />;
    else if (modalType === 'toSignOut') return <Alert func={modalType} />;
    else if (modalType === 'toUserInfo') return <Alert func={modalType} />;
    else if (modalType === 'quizAnswer') return <QuizAnswer />;
    else if (modalType === 'emailCert') return <EmailCert />;
    else if (modalType === 'findPassword') return <FindPassword />;
    else if (modalType === 'deleteUserConfirm') return <DeleteUserConfirm />;
    else if (modalType === 'deleteAnswerConfirm') return <DeleteAnswerConfirm />;
    else if (modalType === 'tutorialAnswer') return <QuizAnswer />;
  };

  return (
    <>
      <Background>
        <ModalWrapper modaltype={modalType}>
          <ModalContent modaltype={modalType}>
            <CloseModalButton modaltype={modalType} onClick={() => dispatch(setModal('close'))} />
            <SetContent />
          </ModalContent>
        </ModalWrapper>
      </Background>
    </>
  );
};

export default Modal;
