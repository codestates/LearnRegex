import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Modal from '../modal/Modal';
import { googleCallback } from '../../lib/oauthGoogle';
import { kakaoCallback } from '../../lib/oauthKakao';
import { githubCallback } from '../../lib/oauthGithub';
import { verifyEmail } from '../../lib/requestEmailConfirm';

const Navigation = () => {
  //! Sidebar 상태
  const [openSidebar, setOpenSidebar] = useState(false);

  //! Sidebar 상태 변경 함수
  const handleSidebar = (boolean) => {
    console.log(openSidebar);
    setOpenSidebar(boolean);
  };

  //! Modal 상태
  const [openModal, setOpenModal] = useState(false);

  //! Modal 상태 변경 함수
  const handleModal = (boolean) => {
    setOpenModal(boolean);
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const urlParserReg = /(?<=state=)([a-z]+)/;

    if (urlParserReg.test(url.search)) {
      const state = urlParserReg.exec(url.search)[0];

      if (state === 'kakao') {
        kakaoCallback(url);
      } else if (state === 'google') {
        googleCallback(url);
      } else if (state === 'github') {
        githubCallback(url);
      } else if (state === 'signup' || state === 'editinfo') {
        verifyEmail(url);
      } else if (state === 'findpassword') {
      }
    }
  }, []);

  return (
    <>
      <Navbar handleSidebar={handleSidebar} handleModal={handleModal} openModal={openModal} setOpenModal={setOpenModal} />
      <Sidebar openSidebar={openSidebar} handleSidebar={handleSidebar} handleModal={handleModal} openModal={openModal} setOpenModal={setOpenModal} />
      {openModal ? <Modal openModal={openModal} setOpenModal={setOpenModal} /> : null}
    </>
  );
};

export default Navigation;
