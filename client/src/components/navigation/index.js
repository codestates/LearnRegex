import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Modal from '../modal';
import { googleCallback } from '../../lib/oauthGoogle';
import { kakaoCallback } from '../../lib/oauthKakao';
import { githubCallback } from '../../lib/oauthGithub';

const Navigation = () => {
  const { modalType } = useSelector((state) => state.modal);
  //! Sidebar 상태
  const [openSidebar, setOpenSidebar] = useState(false);

  //! Sidebar 상태 변경 함수
  const handleSidebar = (boolean) => {
    console.log(openSidebar);
    setOpenSidebar(boolean);
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const urlParserReg = /(?<=state=)([a-z]+)/;

    if (urlParserReg.test(url.search)) {
      const socialType = urlParserReg.exec(url.search)[0];

      if (socialType === 'kakao') {
        kakaoCallback(url);
      } else if (socialType === 'google') {
        googleCallback(url);
      } else if (socialType === 'github') {
        githubCallback(url);
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
