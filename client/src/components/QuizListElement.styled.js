import styled from 'styled-components';
import { ShadowBox } from '../styles/ShadowBox.styled';
import { ChallengeButton } from '../styles/button/ChallengeButton.styled';

export const Container = styled(ShadowBox)`
  /* border: 1px solid; */
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  width: 70rem;
  padding: 2.4rem 3rem;
  height: 15rem;
  border-radius: 1.2rem;
  background-color: var(--color-white);
  box-shadow: 0px 16px 15px rgba(63, 63, 63, 0.4);
  transition: all 0.6s ease 0s;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    /* width: 35rem; */
    /* padding: 2.4rem 1rem;
    height: 20rem; */
    height: 25rem;
  }
`;

export const Button = styled(ChallengeButton)``;

const P = styled.p`
  /* margin: 0 0 1rem 0; */
`;

export const Title = styled(P)`
  font-family: IBMPlexSansKR-SemiBold;
  font-size: 2rem;
  /* margin-bottom: 0.6rem; */
  /* cursor: pointer; */

  @media screen and (max-width: 768px) {
    /* font-size: rem; */
    /* margin-bottom: 0.5rem; */
    /* margin-top: 0.5rem; */
  }
`;

export const Nickname = styled(P)`
  font-size: 1.4rem;

  @media screen and (max-width: 768px) {
    /* font-size: 1.5rem; */
  }
`;

export const Cnt = styled(P)`
  font-size: 1.2rem;
  color: var(--color-dark-gray);
  /* position: absolute; */
  /* bottom: 0; */

  @media screen and (max-width: 768px) {
    /* font-size: 1.5rem; */
    /* position: static; */
  }
`;
