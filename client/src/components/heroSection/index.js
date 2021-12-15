import React, { useState } from 'react';
import Video from '../../videos/video-1.mp4';
import { HeroContainer, HeroBg, HeroContent, VideoBg, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './Hero.styled';
import { GetStartedButton } from '../../styles/button/GetStartedButton';

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>정규표현식을 쉽고 재밌게</HeroH1>
          <HeroP>
            어렵고 복잡하기만 했던 정규표현식,
            <HeroP>LearnRegex와 함께 공부해볼까요?</HeroP>
          </HeroP>
          <HeroBtnWrapper>
            <GetStartedButton to="/tutorial" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
              시작하기 {hover ? <ArrowForward /> : <ArrowRight />}
            </GetStartedButton>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
