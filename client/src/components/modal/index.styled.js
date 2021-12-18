import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(63, 63, 63, 0.93);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  background: #fff;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  border-radius: 16px;
  width: ${({ modaltype }) => {
    if (modaltype === 'quizAnswer' || modaltype === 'tutorialAnswer') return '500px';
    else return '400px';
  }};
  height: ${({ modaltype }) => {
    if (modaltype === 'emailCert') return '330px';
    else if (modaltype === 'findPassword') return '280px';
    else if (modaltype === 'toHome' || modaltype === 'toUserInfo' || modaltype === 'toSignOut') return '200px';
    else if (modaltype === 'deleteUserConfirm' || modaltype === 'deleteAnswerConfirm') return '250px';
    else if (modaltype === 'quizAnswer' || modaltype === 'tutorialAnswer') return '380px';
    else return '550px';
  }};
  grid-template-columns: 1fr 1fr;
  position: relative;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ modaltype }) => {
    if (modaltype === 'quizAnswer' || modaltype === 'tutorialAnswer') return '600px';
    else return '400px';
  }};
  height: ${({ modaltype }) => {
    if (modaltype === 'emailCert') return '330px';
    else if (modaltype === 'findPassword') return '280px';
    else if (modaltype === 'toHome' || modaltype === 'toUserInfo' || modaltype === 'toSignOut') return '200px';
    else if (modaltype === 'deleteUserConfirm' || modaltype === 'deleteAnswerConfirm') return '250px';
    else if (modaltype === 'quizAnswer' || modaltype === 'tutorialAnswer') return '380px';
    else return '550px';
  }};
`;

export const CloseModalButton = styled(MdClose)`
  /* display: none; */
  cursor: pointer;
  ${({ modaltype }) => {
    if (modaltype === 'signIn' || modaltype === 'signUp' || modaltype === 'findPassword') {
      return null;
    } else {
      return `display: none;`;
    }
  }}
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  color: #000;
`;
