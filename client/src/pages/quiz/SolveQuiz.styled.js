import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex; */
  width: 100%;
  margin: auto;
  height: 100%;

  .content {
    width: fit-content;
    margin: 0 auto;
    padding: 3.5rem 0;
    border: 3px solid red;
    /* display: inline; */
    /* width: inherit; */
    /* width: 100%; */
    /* max-width: 100%; */
    /* max-width: 100%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 30rem;
    /* padding: 2rem 0 4rem; */

    @media screen and (max-width: 960px) {
      width: auto;
      margin: 0 2rem;
    }
  }

  .modify {
    margin-bottom: 0.7rem;
    margin-left: auto;

    span {
      margin-left: 0.5rem;
      cursor: pointer;
    }
  }
`;

export const P = styled.p`
  font-size: ${(prop) => prop.size}rem;
  font-family: IBMPlexSansKR-${(prop) => prop.family};
  text-align: center;
  margin-bottom: ${(prop) => prop.margin}rem;
  cursor: default;
`;
