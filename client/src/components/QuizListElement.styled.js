import styled from 'styled-components';
import { ShadowBox } from '../styles/ShadowBox.styled';

export const Container = styled(ShadowBox)`
  /* border: 1px solid; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 2.5rem auto;
  padding: 2.4rem 3rem;
  width: 100%;
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
    display: inline-block;
    position: relative;

    @media screen and (max-width: 768px) {
      width: 100%;
      text-align: center;
    }

    span {
      font-family: IBMPlexSansKR-Medium;
      color: var(--color-blue);
    }

    .tooltip {
      display: none;
      animation: tooltipAni 1s;
      transition: opacity 0.5s;
      position: absolute;
      bottom: 93%;
      left: 0;
      background-color: var(--color-gray);
      border-radius: 0.3rem;
      padding: 0.3rem 0.7rem;

      @media screen and (max-width: 768px) {
        bottom: 80%;
        right: 0;
      }
    }

    p:hover + span {
      display: block;
    }
  }

  @keyframes tooltipAni {
    0% {
      opacity: 0;
    }
    80 {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  // * ----------------------------------------------------------------

  .buttonBox {
    /* border: 1px solid; */
    width: 30%;
    height: 100%;
    margin-left: 0.4rem;
    padding-top: 3rem;

    @media screen and (max-width: 768px) {
      width: 15rem;
      padding-top: 0;
      text-align: center;
    }
  }
`;

// * ----------------------------------------------------------------

const P = styled.p`
  margin: 1rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Title = styled(P)`
  font-family: IBMPlexSansKR-SemiBold;
  font-size: 2rem;
  margin-bottom: 0.3rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
    padding-top: 1.3rem;
    margin-bottom: 0.5rem;
  }
`;

export const Nickname = styled(P)`
  font-size: 1.4rem;
  margin-top: 0;

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const Cnt = styled(P)`
  font-size: 1.2rem;
  color: var(--color-dark-gray);
`;
