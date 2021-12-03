import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavSignInBtn } from './NavbarElements';
import Modal from '../modal/Modal';

const Navbar = ({ handleSidebar, handleModal, openModal, setOpenModal }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">LearnRegex</NavLogo>
          <MobileIcon onClick={handleSidebar}>
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
              <NavSignInBtn onClick={handleModal}>로그인</NavSignInBtn>
              {openModal ? <Modal openModal={openModal} setOpenModal={setOpenModal} /> : null}
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
