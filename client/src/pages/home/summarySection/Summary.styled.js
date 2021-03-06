import styled from 'styled-components';

export const SummaryContainer = styled.div`
  height: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-white);
  padding: 2rem auto;

  @media screen and (max-width: 768px) {
    height: 90rem;
  }

  @media screen and (max-width: 480px) {
    height: 90rem;
  }
`;

export const SummaryWrapper = styled.div`
  max-height: 90rem;
  max-width: 1170px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 0.5rem;
  margin-top: 3rem;
  /* padding-bottom: 5rem; */

  @media screen and (max-width: 1170px) {
    grid-template-columns: 1fr 1fr;
    margin-top: -1rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1.5rem 2rem 1.5rem;
    margin-top: 2rem;
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    padding: 0 1.5rem 5rem 1.5rem;
    margin-top: 2rem;
  }
`;

export const SummaryCard = styled.div`
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  max-height: 23rem;
  min-height: 25rem;
  padding: 1.8rem;
  margin: 0 0.4rem;
  box-shadow: 0 3px 5px 0 rgba(051, 102, 153, 0.5);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    height: 20rem;
  }
`;

export const SummaryIcon = styled.img`
  height: 12rem;
  width: 10rem;
  margin-bottom: 1rem;
`;

export const SummaryH1 = styled.h1`
  font-size: 2.8rem;
  font-family: 'IBMPlexSansKR-Bold';
  color: var(--color-black);
  margin-bottom: 2.5rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SummaryH2 = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--color-dark-blue);
  font-family: 'IBMPlexSansKR-SemiBold';
  background-color: rgba(051, 102, 153, 0.1);
  border-radius: 10px;
  padding: 0.5rem;
`;

export const SummaryP = styled.p`
  font-size: 1.3rem;
  text-align: center;
  word-break: keep-all;
  font-family: 'IBMPlexSansKR-Light';
  line-height: 1.8rem;
`;
