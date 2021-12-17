import styled from 'styled-components';
import { ShadowBox } from '../styles/ShadowBox.styled';
import { ChallengeButton } from '../styles/button/ChallengeButton.styled';

export const Container = styled(ShadowBox)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 2.5rem;
  padding: 2.4rem 3rem;
  height: 15rem;
  border-radius: 1.2rem;
  background-color: var(--color-white);
  box-shadow: 0px 16px 15px rgba(63, 63, 63, 0.4);
  transition: all 0.6s ease 0s;

  span {
    color: var(--color-blue);
  }

  @media screen and (max-width: 768px) {
    height: 20rem;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const Button = styled(ChallengeButton)`
  width: 16rem;
  margin-left: auto;
  border-radius: 1.2rem;
  margin-top: auto;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

const P = styled.p``;

export const Title = styled(P)`
  font-family: IBMPlexSansKR-SemiBold;
  font-size: 2rem;
  margin-bottom: 0.6rem;
  //* 제목이 15자 이상인데 공백이 없으면 word-break: brack-all; 속성 주기
`;

export const Nickname = styled(P)`
  font-size: 1.4rem;
  margin-bottom: 0.6rem;
`;

export const Cnt = styled(P)`
  font-size: 1.2rem;
  color: var(--color-dark-gray);

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;
