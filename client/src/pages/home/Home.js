import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeroSection from '../home/heroSection';
import InfoSection from '../home/infoSection';
import { homeObjOne, homeObjTwo } from '../../pages/home/infoSection/InfoData';
import SummarySection from '../home/summarySection';
import Footer from '../../components/footer/Footer';

const LandingContainer = styled.div`
  background-color: var(--color-white);
  cursor: default;
`;

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
    <LandingContainer>
      <HeroSection />
      <InfoSection {...homeObjOne} scrollY={scrollY} />
      <InfoSection {...homeObjTwo} scrollY={scrollY} />
      <SummarySection />
      <Footer />
    </LandingContainer>
  );
};

export default Home;
