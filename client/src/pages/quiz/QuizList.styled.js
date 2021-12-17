import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 4rem 0;

  .cardContainer {
    /* width: 70%; */
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* margin: auto; */
    align-items: center;

    @media screen and (max-width: 1200px) {
      margin: 0 2em;
      padding: 2rem 0;
    }

    @media screen and (max-width: 768px) {
      margin: 0 2rem;
      padding: 2rem 0;
    }
  }

  img {
    margin-left: auto;
    display: flex;
    cursor: pointer;
    width: 4.7rem;
    transition: all ease 0.4s;

    /* @media screen and (max-width: 768px) {
      width: 5rem;
    } */
  }

  img:hover {
    transform: scale(1.1, 1.1);
  }

  img:hover + p {
    display: block;
  }
`;

export const P = styled.p`
  /* 말풍선 적절한 top 과 margin-left 로 위치조정 */
  display: none;
  position: absolute;
  width: ${({ state }) => (state === 'notice' ? '9rem' : '13rem')};
  padding: 8px;
  right: 11rem;
  bottom: 1.2rem;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  border: 1px dashed var(--color-dark-blue);
  background: var(--color-dark-blue);
  color: var(--color-white);

  /* @media screen and (max-width: 768px) {
    bottom: 2rem;
    right: 10rem;
  } */

  :after {
    position: absolute;
    top: 20%;
    left: 100%;
    width: 0;
    height: 0;
    margin-left: 0;
    border: solid;
    border-color: rgba(51, 51, 51, 0);
    border-left-color: var(--color-dark-blue);
    border-width: 10px;
    pointer-events: none;
    content: ' ';

    /* @media screen and (max-width: 768px) {
      left: 100%;
      top: 20%;
      margin-left: 0;
      border-top-color: transparent;
      border-left-color: var(--color-dark-blue);
    } */
  }
`;
