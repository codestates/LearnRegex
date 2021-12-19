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
`;

export const SkeletonElement = styled.div`
    width: ${(prop) => prop.width};
    height: ${(prop) => prop.height};
    display: block;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 80%), lightgray;
    background-repeat: repeat-y;
    background-size: 50px 500px;
    background-position: 0 0;
    animation: shine 1s infinite;
    border-radius: 0.2rem;
    margin: ${(prop) => prop.margin};
    align-self: ${(prop) => prop.alignself};
  }

  @keyframes shine {
    to {
      background-position: 100% 0, /* move highlight to right */ 0 0;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0;
  border-radius: 1.2rem;
  transition: all 0.6s ease 0s;
  margin-bottom: 2.5rem;
`;

export const QuizFormSkeletonContainer = styled(Container)`
  border-radius: 0;
  box-shadow: 0px 5px 8px rgba(171, 180, 221, 0.4);
  height: 35rem;
  padding: 5rem 2.4rem;
  /* margin: auto; */
`;
