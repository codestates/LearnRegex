import styled from 'styled-components';
import { FaMinusCircle } from 'react-icons/fa';
import { BsCheck } from 'react-icons/bs';

export const TestCaseElement = styled.span`
  background-color: var(--color-light-gray);
  border-radius: 0.8rem;
  text-align: left;
  padding: 0.3rem 2rem 0.3rem 1.2rem;
  border: 1px solid;
  width: 100%;
  /* position: relative; */
`;

export const TaskElement = styled.button`
  background-color: ${(prop) => `var(--color-${prop.color})`};
  color: var(--color-white);
  padding: 0 0.7rem;
  margin-right: 0.5rem;
  width: 10rem;
  border-radius: 0.4rem;
  /* border: 1px solid; */
`;

export const TestCaseBox = styled.div`
  /* background-color: blue; */
  display: flex;
  margin: 0.5rem 0;
  /* position: relative; */
  flex-wrap: wrap;

  span {
    flex-grow: 1;
    font-size: 1.3rem;
    /* flex-shrink: 0; */
  }

  input {
    flex-grow: 1;
    font-size: 1.3rem;
  }

  button {
    flex-shrink: 0;
    font-size: 1.6rem;
  }

  .capture {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;

export const ClearCheckBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  margin-right: ${(prop) => prop.size}rem;
`;

export const CheckIcon = styled(BsCheck)`
  transition: color 0.5s;
  color: ${(prop) => `var(--color-${prop.color})`};
  font-size: 2rem;
`;

export const MinusTestCaseButton = styled(FaMinusCircle)`
  transition: color 0.4s;
  margin-left: 0.5rem;
  color: var(--color-dark-gray);
  font-size: 2rem;
  cursor: pointer;

  :hover {
    color: var(--color-pink);
  }
`;

export const InputText = styled.input.attrs({})`
  outline: none;
  border: 1px solid ${({ isEmpty }) => (isEmpty ? 'red' : 'black')};
  background-color: var(--color-light-gray);
  border-radius: 0.8rem;
  text-align: left;
  padding: 0.3rem 2rem 0.3rem 1.2rem;
  border: 1px solid;
`;

export const Group = styled.span`
  /* position: absolute; */
  color: ${(prop) => `var(--color-${prop.color})`};
  /* bottom: 0; */
`;

export const ShowTestCaseContainer = styled.div`
  border: 1px solid;
  width: 100%;
`;
