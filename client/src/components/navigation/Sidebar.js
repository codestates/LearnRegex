import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarBtn } from './SidebarElements';

const Sidebar = ({ isOpen, openSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={openSidebar}>
      <Icon onClick={openSidebar}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/tutorial">학습하기</SidebarLink>
          <SidebarLink to="/quizlist">퀴즈</SidebarLink>
          <SidebarLink to="/cheatsheet">자습서</SidebarLink>
          <SidebarBtnWrap>
            <SidebarBtn to="/signin">로그인</SidebarBtn>
          </SidebarBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
