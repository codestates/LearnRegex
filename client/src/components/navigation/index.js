import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Modal from '../modal';
import { googleCallback } from '../../lib/oauthGoogle';
import { kakaoCallback } from '../../lib/oauthKakao';
import { githubCallback } from '../../lib/oauthGithub';
import { verifyEmail, editEmail } from '../../lib/requestEmailConfirm';

const Navigation = () => {
  const { modalType } = useSelector((state) => state.modal);
  //! Sidebar 상태
  const [openSidebar, setOpenSidebar] = useState(false);

  //! Sidebar 상태 변경 함수
  const handleSidebar = (boolean) => {
    setOpenSidebar(boolean);
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const urlParserReg = /state=([a-z]+)/;

    if (urlParserReg.test(url.search)) {
      const state = urlParserReg.exec(url.search)[1];

      if (state === 'kakao') {
        kakaoCallback(url);
      } else if (state === 'google') {
        googleCallback(url);
      } else if (state === 'github') {
        githubCallback(url);
      } else if (state === 'signup') {
        verifyEmail(url);
      } else if (state === 'editemail') {
        editEmail(url);
      }
    }
  }, []);

  return (
    <>
      <Navbar handleSidebar={handleSidebar} />
      <Sidebar openSidebar={openSidebar} handleSidebar={handleSidebar} />
      {modalType !== 'close' ? <Modal /> : null}
    </>
  );
};

export default Navigation;
