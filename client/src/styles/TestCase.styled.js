import styled from 'styled-components';
import { FaMinusCircle } from 'react-icons/fa';
import { BsCheck } from 'react-icons/bs';

export const TestCaseElement = styled.span`
  background-color: var(--color-light-gray);
  border-radius: 0.3rem;
  text-align: left;
  padding: 0.3rem 2rem 0.3rem 0.5rem;
  /* border: 1px solid; */
  width: 100%;
  min-height: 2rem;
  font-family: D2Coding;
  cursor: default;

  word-break: break-all;

  /* color: ${(prop) => `var(--color-${prop.color})`}; */

  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 0.6rem 2.4rem 0.6rem 0.5rem;
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
  cursor: pointer;
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
  flex-wrap: nowrap;
  margin-bottom: 0.7rem;

  span {
    flex-grow: 1;
    font-size: 1.3rem;
    /* flex-shrink: 1; */
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
    margin-right: 0.4rem;
    /* flex-shrink: 1; */
    /* min-height: 2.8rem; */
    /* min-height: 10rem; */

    .groupElement {
      word-break: break-all;
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
  /* margin-left: 0.4rem; */
  color: var(--color-dark-gray);
  font-size: 2rem;
  cursor: pointer;
  /* flex-basis: 6rem; */
  min-width: 2rem;

  :hover {
    color: var(--color-pink);
  }
`;

export const InputText = styled.input.attrs({})`
  outline: none;
  border: ${({ isEmpty }) => (isEmpty ? '1px solid red' : '')};
  background-color: var(--color-light-gray);
  border-radius: 0.8rem;
  text-align: left;
  padding: 0.3rem 2rem 0.3rem 1.2rem;
  /* border: 1px solid; */
  font-family: D2Coding;
`;

export const Group = styled.span`
  background-color: ${(prop) => `var(--color-${prop.color})`};
  border-radius: 0.4rem;
  margin-right: 0.4rem;
  padding: 0.3rem 0.5rem;
  font-family: D2Coding;
  cursor: default;
`;

export const ShowTestCaseContainer = styled.div`
  width: 100%;
  /* margin-bottom: 5rem; */
  /* border: 1px solid; */
`;
