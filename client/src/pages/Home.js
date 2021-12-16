import React from 'react';
import HeroSection from '../components/heroSection';
import InfoSection from '../components/infoSection';
import { homeObjOne, homeObjTwo } from '../components/infoSection/InfoData';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Footer />
    </>
  );
};

export default Home;
