import React from 'react';
import HeroSection from '../home/heroSection';
import InfoSection from '../home/infoSection';
import { homeObjOne, homeObjTwo } from '../../pages/home/infoSection/InfoData';
import SummarySection from '../home/summarySection';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <SummarySection />
      <Footer />
    </>
  );
};

export default Home;
