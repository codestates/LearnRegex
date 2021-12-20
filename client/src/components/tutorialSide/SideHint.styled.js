import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsCheckCircle } from 'react-icons/bs';
import { BsCheckCircleFill } from 'react-icons/bs';

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
  min-height: 3rem;
`;

export const LevelContainer = styled.div`
  margin-left: auto;
`;

export const Span = styled.span`
  font-size: ${(prop) => prop.size}rem;
  font-family: ${(prop) => `IBMPlexSansKR-${prop.family}`};
  min-height: ${(prop) => prop.height}rem;
  color: ${(prop) => `var(--color-${prop.color})`};
  cursor: ${({ cursor }) => (cursor ? cursor : 'default')};
  margin-bottom: ${(prop) => prop.margin}rem;
  white-space: pre-line;
  word-break: keep-all;

  :hover {
    transition: all ease 0.3s;
    color: ${(prop) => `var(--color-${prop.hovercolor})`};
    background-color: ${(prop) => `var(--color-${prop.hoverbackcolor})`};
    border-radius: 0.3rem;
    padding: ${(prop) => prop.padding}rem;
  }
`;

export const FowardIcon = styled(IoIosArrowForward)`
  font-size: 2.5rem;
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
  font-size: 2.5rem;
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
  font-size: 2.5rem;
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
  margin-left: 0.3rem;

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
