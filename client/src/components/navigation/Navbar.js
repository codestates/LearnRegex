import React from 'react';
import { useDispatch } from 'react-redux';
import { FaBars } from 'react-icons/fa';
import { setModal } from '../../modules/modal';
import { checkUserIsLogin, checkUserNickname } from '../../lib/checkIsLogin';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavSignInBtn } from './NavbarElements';

const Navbar = ({ handleSidebar }) => {
  const dispatch = useDispatch();
  const isLogin = checkUserIsLogin();
  const nickname = checkUserNickname();

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">LearnRegex</NavLogo>
          <MobileIcon onClick={() => handleSidebar(true)}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/tutorial">학습하기</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/quizlist">퀴즈</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/cheatsheet">자습서</NavLinks>
            </NavItem>
            <NavBtn>
              <NavSignInBtn onClick={() => dispatch(setModal('signIn'))}>{isLogin ? nickname : '로그인'}</NavSignInBtn>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
