import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 4rem 0;

  .cardContainer {
    width: 70rem;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    @media screen and (max-width: 1200px) {
      width: auto;
      margin: 0 2em;
    }
  }

  img {
    margin-left: auto;
    margin-bottom: 2rem;
    cursor: pointer;
    width: 4.7rem;
    transition: all ease 0.4s;
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
  width: ${({ state }) => (state === 'notice' ? '7rem' : '12rem')};
  padding: 8px;
  text-align: center;
  right: 6rem;
  top: 2rem;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  border: 1px dashed var(--color-dark-blue);
  background: var(--color-dark-blue);
  color: var(--color-white);

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
  }
`;
