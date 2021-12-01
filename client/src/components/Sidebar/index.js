import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarBtn } from './SidebarElements';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/tutorial">학습하기</SidebarLink>
          <SidebarLink to="/quizzes">퀴즈</SidebarLink>
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
