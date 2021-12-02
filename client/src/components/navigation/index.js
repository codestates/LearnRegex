import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Navigation;
