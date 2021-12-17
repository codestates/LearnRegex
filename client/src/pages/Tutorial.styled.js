import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  /* min-width: 70rem; */
  margin: auto;
  padding: 5rem 10rem;
  /* padding: 2rem; */

  @media screen and (max-width: 965px) {
    width: 75%;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    /* max-width: none; */
    flex-direction: column;
    align-items: stretch;
  }

  p {
    font-family: IBMPlexSansKR-Bold;
    font-size: 3rem;
  }

  .content {
    width: 70%;
    background-color: var(--color-white);
    padding: 8rem 1.2rem 4rem;
    text-align: center;
    /* border: 1px solid; */

    @media screen and (max-width: 768px) {
      width: 100%;
      padding-top: 3rem;
    }
  }

  .side {
    width: 30%;
    background-color: var(--color-gray);
    padding: 2rem 0.7rem 1rem;
    /* border: 1px solid; */

    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 2rem 2.3rem 4rem;
    }
  }
`;
