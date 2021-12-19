import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: var(--color-gray);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ openSidebar }) => (openSidebar ? '100%' : '0')};
  top: ${({ openSidebar }) => (openSidebar ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: var(--color-blue);
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

export const SidebarWrap = styled.div`
  color: var(--color-blue);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: ${({ isLogin }) => (isLogin ? '40%' : '20%')};
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 1.5rem;
  font-family: 'IBMPlexSansKR-Bold';
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: var(--color-blue);
  cursor: pointer;
  :hover {
    transition: all 0.2s ease-in-out;
    transform: translateY(-3px);
  }
`;

export const SidebarBtn = styled.button`
  width: 10rem;
  height: 4rem;
  border-radius: 50px;
  background-color: var(--color-blue);
  white-space: nowrap;
  padding: 8px 10px;
  color: var(--color-white);
  font-size: 1.5rem;
  font-family: 'IBMPlexSansKR-Bold';
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 5px 8px rgba(051, 102, 153, 0.5);

  :hover {
    transition: all 0.2s ease-in-out;
    transform: translateY(-5px);
    background-color: var(--color-light-blue);
    color: var(--color-black);
  }
`;

export const SidebarDevider = styled(BsThreeDots)`
  font-size: 3.5rem;
  color: var(--color-dark-gray);
  text-align: center;
`;

export const SubSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;

export const SidebarSignOut = styled.div`
  font-size: 1.5rem;
  font-family: 'IBMPlexSansKR-Bold';
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: var(--color-blue);
  cursor: pointer;

  :hover {
    transition: all 0.2s ease-in-out;
    transform: translateY(-3px);
    color: var(--color-red);
  }
`;
