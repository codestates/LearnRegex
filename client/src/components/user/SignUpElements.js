import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  padding: 0 2rem;
`;

export const Header = styled.div`
  width: 100%;
  margin: 1.7rem 0;

  span {
    font-family: IBMPlexSansKR-Bold;
    font-size: 2.5rem;
    color: var(--color-dark-blue);
  }
`;

export const InputBox = styled.div`
  width: 100%;
  height: 4rem;
  text-align: left;
  margin: 0.1rem 0;

  span {
    color: var(--color-red);
    opacity: 0.8;
    font-size: 0.9rem;
  }
`;

export const Input = styled.input.attrs({})`
  width: 100%;
  height: 2.5rem;
  background-color: var(--color-gray);
  border-radius: 7px;
  opacity: 0.7;
  padding: 0 0.6rem 0 0.6rem;
`;

export const Button = styled.button`
  width: 50%;
  height: 40px;
  font-size: 1.3rem;
  border-radius: 1rem;
  margin: 0.9rem 0;
  background-color: var(--color-blue);
  color: white;

  transition: all 0.3s ease 0s;
  letter-spacing: 2.5px;
  :hover {
    box-shadow: 0px 5px 8px rgba(171, 180, 221, 0.4);
    transform: translateY(-2px);
  }
`;

export const Bottom = styled.div`
  padding: 1.2rem 0;

  span {
    padding: 0 0.8rem;
  }
`;

export const Span = styled.span`
  cursor: pointer;

  :hover {
    color: var(--color-blue);
    text-decoration: underline;
  }
`;
