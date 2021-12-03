import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Background, ModalWrapper, ModalImg, ModalContent, CloseModalButton } from './ModalElements';
import SignIn from '../user/SignIn';

const Modal = ({ openModal, setOpenModal }) => {
  // const navigate = useNavigate();
  // console.log('모달모달');
  // const modalRef = useRef();

  // const closeModal = (e) => {
  //   if (modalRef.current === e.target) {
  //     setShowModal(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('keydown', keyPress);
  //   return () => document.removeEventListener('keydown', keyPress);
  // }, [keyPress]);

  // const handleButton = () => {
  //   navigate('/signin');
  // };

  return (
    <>
      {openModal ? (
        <Background>
          <ModalWrapper openModal={openModal}>
            <ModalImg />
            <ModalContent>
              <SignIn />
            </ModalContent>
            <CloseModalButton aria-label="Close modal" onClick={() => setOpenModal((prev) => !prev)} />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
