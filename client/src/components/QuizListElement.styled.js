import styled from 'styled-components';
import { ShadowBox } from '../styles/ShadowBox.styled';

export const Container = styled(ShadowBox)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* border: 1px solid; */
  margin: 1.6rem auto;
  padding: 2.4rem 3rem;
  width: 100%;
  height: 15rem;
  border-radius: 1.2rem;
  box-shadow: 0px 7px 17px rgba(63, 63, 63, 0.4);
  /* background-color: rgba(232, 232, 236, 0.3); */
  transition: all 0.6s ease 0s;

  span {
    font-family: IBMPlexSansKR-Medium;
    color: var(--color-blue);
  }

  .content {
    width: 80%;
    height: 100%;
    text-align: left;

    @media screen and (max-width: 768px) {
      width: 100%;
      text-align: center;
    }
  }

  .buttonBox {
    width: 20%;
    height: 100%;

    @media screen and (max-width: 768px) {
      width: 60%;
      height: 4.3rem;
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 2.4rem 1rem;
    height: 20rem;
  }
`;

const P = styled.p`
  margin: 1rem 0;
`;

export const Title = styled(P)`
  font-family: IBMPlexSansKR-SemiBold;
  font-size: 2.2rem;
  margin-bottom: 0.3rem;
  @media screen and (max-width: 768px) {
    font-size: 1.67rem;
    padding-top: 1.3rem;
  }
`;

export const Nickname = styled(P)`
  font-size: 1.6rem;
  margin-top: 0;
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const Cnt = styled(P)`
  font-size: 1.2rem;
  color: var(--color-dark-gray);
`;
