import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  background: #fff;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  border-radius: 16px;
  width: 400px;
  height: 550px;
  grid-template-columns: 1fr 1fr;
  position: relative;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 550px;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  /* position: absolute; */
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  color: #000;
`;
