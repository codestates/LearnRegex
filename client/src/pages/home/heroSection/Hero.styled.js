import styled from 'styled-components';
import { MdArrowDownward, MdKeyboardArrowRight } from 'react-icons/md';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 95vh;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  opacity: 0.7;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 0.5rem 1.5rem;
  display: block;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  background-color: rgba(051, 102, 153, 0.1);
  padding: 0.7rem;
  border-radius: 10px;
  color: var(--color-light-black);
  font-size: 3.5rem;
  font-family: 'IBMPlexSansKR-Bold';
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
    word-break: keep-all;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const HeroP = styled.p`
  margin-top: 1rem;
  color: var(--color-black);
  font-size: 2rem;
  font-family: 'IBMPlexSansKR-SemiBold';
  text-align: center;
  max-width: 50rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowDownward = styled(MdArrowDownward)`
  margin-left: 0.5rem;
  font-size: 1.25rem;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 0.5rem;
  font-size: 1.25rem;
`;
