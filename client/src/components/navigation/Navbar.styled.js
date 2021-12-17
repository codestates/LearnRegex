import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: var(--color-white);
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  /* margin-top: 0.5rem;
  margin-bottom: 0.5rem; */

  @media screen and (max-width: 1170px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%; // <Nav> height: 5rem;
  z-index: 1;
  width: 100%;
  padding: 10px 24px;
  max-width: 1170px;
`;

export const NavLogo = styled.img.attrs({})`
  height: 100%;
  cursor: pointer;
  /* justify-self: flex-start; */
  /* display: flex;
  align-items: center; */
  /* margin: 10px 0 30px 24px; */
`;

// 반응형 햄버거 아이콘
export const MobileIcon = styled.div`
  display: none; // 특정 breakpoint 에서만 보임

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    color: var(--color-blue);
  }
`;

export const NavMenu = styled.ul`
  font-size: 1.125rem;
  font-family: 'IBMPlexSansKR-SemiBold';
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-top: 1rem;
  /* margin-left: auto; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 100%;
`;

export const NavLinks = styled(Link)`
  color: var(--color-blue);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  :hover {
    transition: all 0.2s ease-in-out;
    transform: translateY(-3px);
  }
`;

export const NavBtnWrap = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 3px;
  margin-left: 15px;
  position: relative;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavSignInBtn = styled.button`
  border-radius: 20px;
  background: var(--color-blue);
  box-shadow: 0px 5px 8px rgba(171, 180, 221, 0.8);
  color: var(--color-white);
  white-space: nowrap;
  padding: 10px 15px;
  font-size: 1.15rem;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;

  :hover {
    transition: all 0.2s ease-in-out;
    transform: translateY(-3px);
  }
`;

export const SubNavigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
  color: var(--color-black);
  position: absolute;
  top: 2.8rem;
  width: 6.3rem;
  height: 4rem;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0.8rem;
`;

export const SubNaviLink = styled(Link)`
  width: 100%;
  :hover {
    opacity: 0.7;
  }
`;

export const SubNaviSignOut = styled.div`
  width: 100%;
  :hover {
    opacity: 0.7;
  }
`;
