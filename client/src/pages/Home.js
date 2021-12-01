import React, { useState } from 'react';
import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';
// import Footer from '../components/Footer';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <Navbar toggle={toggle} /> */}
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Home;
