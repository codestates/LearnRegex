import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarBtn } from './SidebarElements';
import Modal from '../modal/Modal';

const Sidebar = ({ openSidebar, handleSidebar, handleModal, openModal, setOpenModal }) => {
  return (
    <SidebarContainer openSidebar={openSidebar} onClick={handleSidebar}>
      <Icon onClick={handleSidebar}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/tutorial">학습하기</SidebarLink>
          <SidebarLink to="/quizlist">퀴즈</SidebarLink>
          <SidebarLink to="/cheatsheet">자습서</SidebarLink>
          <SidebarBtnWrap>
            <SidebarBtn onClick={handleModal}>로그인</SidebarBtn>
            {openModal ? <Modal openModal={openModal} setOpenModal={setOpenModal} /> : null}
          </SidebarBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
