import styled from 'styled-components';

export const TestCase = styled.span`
  background-color: var(--color-light-gray);
  border-radius: 0.8rem;
  border: 1px solid;
`;

export const Task = styled.button`
  background-color: ${(prop) => `var(--color-${prop.color})`};
  color: var(--color-white);
  border: 1px solid;
`;
