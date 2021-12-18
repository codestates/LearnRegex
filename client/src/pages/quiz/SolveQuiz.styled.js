import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;

  .content {
    margin: 0 auto;
    padding: 3.5rem 0;
    width: 70rem;

    @media screen and (max-width: 1180px) {
      width: auto;
      margin: 0 2rem;
    }

    /* @media screen and (max-width: 960px) {
      width: auto;
      margin: 0 2rem;
    } */
  }

  .modify {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.7rem;
    /* margin-left: auto; */

    span {
      margin-left: 0.5rem;
      cursor: pointer;
      font-size: 1.2rem;

      @media screen and (max-width: 768px) {
        font-size: 1.3rem;
      }
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
