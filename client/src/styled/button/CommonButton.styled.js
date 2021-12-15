import styled from 'styled-components';

export const Button = styled.button`
  width: 40%;
  height: 40px;
  font-size: 1.2rem;
  border-radius: 1rem;
  margin: 1.3rem 0 0.9rem 0;
  background-color: var(--color-blue);
  color: white;

  transition: all 0.3s ease 0s;
  letter-spacing: 2.5px;
  :hover {
    box-shadow: 0px 5px 8px rgba(171, 180, 221, 0.4);
    transform: translateY(-2px);
  }
`;
