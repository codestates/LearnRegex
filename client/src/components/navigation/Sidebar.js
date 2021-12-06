import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarBtn } from './SidebarElements';

const Sidebar = ({ openSidebar, handleSidebar, handleModal }) => {
  // TODO:

  return (
    <SidebarContainer openSidebar={openSidebar}>
      <Icon>
        <CloseIcon onClick={() => handleSidebar(false)} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/tutorial">학습하기</SidebarLink>
          <SidebarLink to="/quizlist">퀴즈</SidebarLink>
          <SidebarLink to="/cheatsheet">자습서</SidebarLink>
          <SidebarBtnWrap>
            <SidebarBtn
              onClick={() => {
                handleSidebar(false);
                handleModal(true);
              }}
            >
              로그인
            </SidebarBtn>
          </SidebarBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
