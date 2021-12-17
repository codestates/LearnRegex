import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsCheckCircle } from 'react-icons/bs';
import { BsCheckCircleFill } from 'react-icons/bs';

export const Container = styled.div``;

export const FowardIcon = styled(IoIosArrowForward)`
  font-size: 3.8rem;
  cursor: pointer;
  transition: all ease 0.4s;
  color: var(--color-dark-gray);

  :hover {
    color: var(--color-dark-blue);
  }

  @media screen and (max-width: 963px) {
    font-size: 3rem;
  }
`;

export const BackIcon = styled(IoIosArrowBack)`
  font-size: 3.8rem;
  cursor: pointer;
  transition: all ease 0.4s;
  color: var(--color-dark-gray);

  :hover {
    color: var(--color-dark-blue);
  }

  @media screen and (max-width: 963px) {
    font-size: 3rem;
  }
`;

export const ListIcon = styled(AiOutlineUnorderedList)`
  font-size: 3.5rem;
  cursor: pointer;
  transition: all ease 0.4s;
  color: var(--color-dark-gray);

  :hover {
    color: var(--color-dark-blue);
  }

  @media screen and (max-width: 963px) {
    font-size: 3rem;
  }
`;

export const ClearIcon = styled(BsCheckCircleFill)`
  font-size: 2.1rem;
  transition: all ease 0.4s;
  color: var(--color-green);

  @media screen and (max-width: 768px) {
    font-size: 1.9rem;
  }
`;

export const NotClearIcon = styled(BsCheckCircle)`
  font-size: 2.1rem;
  transition: all ease 0.4s;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;
