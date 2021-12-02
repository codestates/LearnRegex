import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

// Link to Router
import { Link as LinkR } from 'react-router-dom';

// Link to Scroll
// 랜딩페이지에서 스크롤 애니메이션 (추후 변동 가능성 있음)
// 사용하지 않을 시 styled(LinkS) -> styled(LinkR)로 변경하거나
// styled(Link)로 통일
import { Link as LinkS } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #000;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  /* top: 0; */
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: felx;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  /* &:hover {
    color:;
    tansition:;
  } */
`;

export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarBtn = styled(LinkR)`
  border-radius: 40px;
  background: #fff;
  white-space: nowrap;
  padding: 24px 50px;
  color: #000;
  font-size: 25px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* &:hover {
    transition: all 0.2s ease-in-out;
    background: ;
    color: ;
  } */
`;
