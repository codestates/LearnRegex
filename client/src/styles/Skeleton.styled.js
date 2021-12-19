import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 2.5rem;
  padding: 2.4rem 3rem;
  height: 15rem;
  border-radius: 1.2rem;
  background-color: var(--color-white);
  box-shadow: 0px 16px 15px rgba(63, 63, 63, 0.4);
  transition: all 0.6s ease 0s;

  /* .skeleton-loader {
    width: 10rem;
    height: 10rem;
    display: block;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 80%), lightgray;
    background-repeat: repeat-y;
    background-size: 50px 500px;
    background-position: 0 0;
    animation: shine 1s infinite;
  }
  @keyframes shine {
    to {
      background-position: 100% 0, /* move highlight to right */ 0 0;
    }
  } */
`;

export const SkeletonElement = styled.div`
    width: ${(prop) => prop.width}rem;
    height: ${(prop) => prop.height}rem;
    display: block;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 80%), lightgray;
    background-repeat: repeat-y;
    background-size: 50px 500px;
    background-position: 0 0;
    animation: shine 1s infinite;
    margin: 0.5rem 0;
    border-radius: 0.2rem;
    align-self: ${(prop) => prop.alignself};
  }

  @keyframes shine {
    to {
      background-position: 100% 0, /* move highlight to right */ 0 0;
    }
  }
`;
