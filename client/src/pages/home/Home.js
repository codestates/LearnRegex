import React, { useState, useEffect } from 'react';
import HeroSection from '../home/heroSection';
import InfoSection from '../home/infoSection';
import { homeObjOne, homeObjTwo } from '../../pages/home/infoSection/InfoData';
import SummarySection from '../home/summarySection';
import Footer from '../../components/footer/Footer';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  const listener = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return (
    <>
      <HeroSection />
      <InfoSection {...homeObjOne} scrollY={scrollY} />
      <InfoSection {...homeObjTwo} scrollY={scrollY} />
      <SummarySection />
      <Footer />
    </>
  );
};

export default Home;
