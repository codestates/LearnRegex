import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Modal from '../modal/Modal';

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

  return (
    <>
      <Navbar handleSidebar={handleSidebar} handleModal={handleModal} openModal={openModal} setOpenModal={setOpenModal} />
      <Sidebar openSidebar={openSidebar} handleSidebar={handleSidebar} handleModal={handleModal} openModal={openModal} setOpenModal={setOpenModal} />
      {openModal ? <Modal openModal={openModal} setOpenModal={setOpenModal} /> : null}
    </>
  );
};

export default Navigation;
