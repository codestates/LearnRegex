import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  /* height: calc(100vh - 5rem); */
  margin: auto;

  @media screen and (max-width: 1360px) {
    flex-direction: column;
  }

  .content {
    margin: 0 auto;
    padding: 3.5rem 0;

    @media screen and (max-width: 890px) {
      margin: 0 2rem;
    }

    p {
      font-size: 2.6rem;
      font-family: IBMPlexSansKR-Bold;
      margin-bottom: 2rem;
      text-align: center;
      cursor: default;
    }
  }

  .sidebar {
    padding: 1.4rem 0;
    flex-basis: 30rem;
    background-color: var(--color-gray);
    /* border: 1px solid; */
    /* height: calc(100vh - 5rem); */
    overflow: auto;

    @media screen and (max-width: 1360px) {
      height: auto;
      flex-basis: auto;
      overflow: visible;
      width: 100%;
    }

    @media screen and (max-width: 768px) {
      height: auto;
      overflow: visible;
      margin-top: auto;
    }
  }
`;
