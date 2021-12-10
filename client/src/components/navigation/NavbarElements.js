import styled from 'styled-components';

// Link to Router
import { Link as LinkR } from 'react-router-dom';

// Link to Scroll
// 랜딩페이지에서 스크롤 애니메이션 (추후 변동 가능성 있음)
// 사용하지 않을 시 styled(LinkS) -> styled(LinkR)로 변경하거나
// styled(Link)로 통일
import { Link as LinkS } from 'react-router-dom';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

// 반응형 햄버거 아이콘
export const MobileIcon = styled.div`
  display: none; // 특정 breakpoint 에서만 보임

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem; // 1rem = 16px
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  // 스크롤 내려가면서 해당 NavLinks 아래에 border 생김
  // 나중에 추가 예정
  /* &.active {
    border-bottom: 3px solid #01bf71;
  } */
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 30px;
  position: relative;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavSignInBtn = styled.button`
  border-radius: 20px;
  background: #fff;
  color: #000;
  white-space: nowrap;
  padding: 10px 15px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  /* transition: ; */

  /* &:hover{
    transition: ;
    background-color: #;
    color: ;
  } */
`;

export const SubNavigation = styled.div`
  color: #fff;
  position: absolute;
  top: 50px;
  background-color: #000;
  width: 100px;
  text-decoration: none;
`;
