import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Navbar openSidebar={openSidebar} sho />
      <Sidebar isOpen={isOpen} openSidebar={openSidebar} />
    </>
  );
};

export default Navigation;
