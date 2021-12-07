import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import UserInfoModal from '../modal/UserInfoModal';
import { googleCallback } from '../../lib/oauthGoogle';
import { kakaoCallback } from '../../lib/oauthKakao';

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
      const socialType = urlParserReg.exec(url.search)[0];

      if (socialType === 'kakao') {
        kakaoCallback(url);
      } else if (socialType === 'google') {
        googleCallback(url);
      } else if (socialType === 'github') {
      }
    }
  }, []);

  return (
    <>
      <Navbar handleSidebar={handleSidebar} handleModal={handleModal} openModal={openModal} setOpenModal={setOpenModal} />
      <Sidebar openSidebar={openSidebar} handleSidebar={handleSidebar} handleModal={handleModal} openModal={openModal} setOpenModal={setOpenModal} />
      {openModal ? <UserInfoModal openModal={openModal} setOpenModal={setOpenModal} /> : null}
    </>
  );
};

export default Navigation;
