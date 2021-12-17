import styled from 'styled-components';
import { FaMinusCircle } from 'react-icons/fa';
import { BsCheck } from 'react-icons/bs';

export const TestCaseElement = styled.span`
  background-color: var(--color-light-gray);
  border-radius: 0.3rem;
  text-align: left;
  padding: 0.3rem 0 0.3rem 0.5rem;
  /* border: 1px solid; */
  width: 100%;
  min-height: 2rem;
  font-family: D2Coding;
  cursor: default;

  @media screen and (max-width: 768px) {
    height: 2.7rem;
    padding: 0.6rem 0 0.6rem 0.5rem;
  }
`;

export const TaskElement = styled.button`
  background-color: ${(prop) => `var(--color-${prop.color})`};
  color: var(--color-white);
  padding: 0 0.7rem;
  margin-right: 0.5rem;
  width: 10rem;
  border-radius: 0.4rem;
  height: 2rem;
  cursor: default;
  /* border: 1px solid; */

  @media screen and (max-width: 768px) {
    width: 7rem;
    height: 2.7rem;
  }
`;

export const TestCaseBox = styled.div`
  /* background-color: blue; */
  display: flex;
  /* margin-bottom: rem; */
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

    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  .capture {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    position: relative;
    /* min-height: 2.8rem; */
    /* min-height: 10rem; */

    .groupElement {
      margin: 0.7rem 0;
    }
  }
`;

export const ClearCheckBox = styled.div`
  position: absolute;
  right: 0.5rem;
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
  font-family: D2Coding;
`;

export const Group = styled.span`
  background-color: ${(prop) => `var(--color-${prop.color})`};
  border-radius: 0.4rem;
  margin-right: 0.4rem;
  padding: 0 0.5rem;
`;

export const ShowTestCaseContainer = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  /* border: 1px solid; */

  @media screen and (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;
