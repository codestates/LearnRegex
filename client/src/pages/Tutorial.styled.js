import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 5rem);
  margin: auto;

  @media screen and (max-width: 1360px) {
    flex-direction: column;
    /* margin: 0 auto; */
  }

  @media screen and (max-width: 890px) {
    /* margin: 0 2rem; */
  }

  .content {
    /* width: 70%; */
    /* background-color: var(--color-white); */
    /* padding: 8rem 1.2rem 4rem; */
    /* text-align: center; */
    margin: 0 auto;
    /* border: 1px solid; */
    padding: 8rem 0;
    text-align: center;

    @media screen and (max-width: 890px) {
      margin: 0 2rem;
    }

    p {
      font-size: 3rem;
      font-family: IBMPlexSansKR-Bold;
      margin-bottom: 2rem;
    }
  }

  .sidebar {
    padding: 4rem 0;
    flex-basis: 30rem;
    background-color: var(--color-gray);
    border: 1px solid;
    height: calc(100vh - 5rem);
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
