import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Navigation = () => {
  //! Sidebar 상태
  const [openSidebar, setOpenSidebar] = useState(false);

  //! Sidebar 상태 변경 함수
  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  //! Modal 상태
  const [openModal, setOpenModal] = useState(false);

  //! Modal 상태 변경 함수
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Navbar handleSidebar={handleSidebar} handleModal={handleModal} openModal={openModal} setOpenModal={setOpenModal} />
      <Sidebar openSidebar={openSidebar} handleSidebar={handleSidebar} openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Navigation;
