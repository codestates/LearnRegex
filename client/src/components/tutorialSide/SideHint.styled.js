import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsCheckCircle } from 'react-icons/bs';
import { BsCheckCircleFill } from 'react-icons/bs';

export const Container = styled.div`
  border: 1px solid;
`;

export const FowardIcon = styled(IoIosArrowForward)`
  font-size: 3.8rem;
`;

export const BackIcon = styled(IoIosArrowBack)`
  font-size: 3.8rem;
`;

export const ListIcon = styled(AiOutlineUnorderedList)`
  font-size: 3.8rem;
  cursor: pointer;
`;

export const ClearIcon = styled(BsCheckCircleFill)`
  font-size: 3.8rem;
`;

export const NotClearIcon = styled(BsCheckCircle)`
  font-size: 3.8rem;
`;
