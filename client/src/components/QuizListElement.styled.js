import styled from 'styled-components';
import { ShadowBox } from '../styles/ShadowBox.styled';

export const Container = styled(ShadowBox)`
  /* border: 1px solid; */
  display: flex;
  margin: 2.5rem 0;
  /* flex: 0 0 1; */
  /* min-width: fit-content; */
  /* width: 60%; */
  /* width: 65rem; */
  /* flex-basis: 30rem; */
  /* flex: 0 0 1; */
  /* flex-grow: 1; */
  /* flex-basis: 100px; */
  /* align-items: center; */

  padding: 2.4rem 3rem;
  height: 15rem;
  border-radius: 1.2rem;
  background-color: var(--color-white);
  box-shadow: 0px 16px 15px rgba(63, 63, 63, 0.4);
  transition: all 0.6s ease 0s;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 2.4rem 1rem;
    height: 20rem;
  }

  // * ----------------------------------------------------------------

  .content {
    /* border: 1px solid; */
    width: 70%;
    height: 100%;
    text-align: left;
    margin-right: 0.4rem;
    /* position: relative; */
    position: relative;

    @media screen and (max-width: 768px) {
      width: 100%;
      text-align: center;
    }

    span {
      font-family: IBMPlexSansKR-Medium;
      color: var(--color-blue);
    }
  }

  // * ----------------------------------------------------------------

  .buttonBox {
    /* border: 1px solid; */
    width: 30%;
    height: 100%;
    margin-left: 0.4rem;
    padding-top: 3rem;

    @media screen and (max-width: 860px) {
      margin-left: 0;
    }

    @media screen and (max-width: 768px) {
      width: 15rem;
      padding-top: 0;
      text-align: center;
    }
  }
`;

// * ----------------------------------------------------------------

const P = styled.p`
  margin: 0 0 1rem 0;
`;

export const Title = styled(P)`
  font-family: IBMPlexSansKR-SemiBold;
  font-size: 2rem;
  margin-bottom: 0.6rem;
  /* cursor: pointer; */

  @media screen and (max-width: 768px) {
    /* font-size: rem; */
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
`;

export const Nickname = styled(P)`
  font-size: 1.4rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Cnt = styled(P)`
  font-size: 1.2rem;
  color: var(--color-dark-gray);
  /* top: auto; */
  position: absolute;
  bottom: 0;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    position: static;
  }
`;
