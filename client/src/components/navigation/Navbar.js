import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavSignInBtn } from './NavbarElements';

const Navbar = ({ handleSidebar, handleModal }) => {
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
              <NavSignInBtn onClick={() => handleModal(true)}>로그인</NavSignInBtn>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
