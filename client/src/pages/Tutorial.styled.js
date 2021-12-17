import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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
    /* width: 30%; */
    background-color: var(--color-gray);
    /* padding: 2rem 0.7rem 1rem; */
    border: 1px solid;
    height: 100%;
    /* height: 75rem; */

    @media screen and (max-width: 1360px) {
      flex-basis: auto;
      width: 100%;
    }
  }
`;
