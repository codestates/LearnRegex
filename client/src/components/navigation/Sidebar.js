import React from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarBtn } from './SidebarElements';

const Sidebar = ({ openSidebar, handleSidebar }) => {
  const dispatch = useDispatch();

  return (
    <SidebarContainer openSidebar={openSidebar}>
      <Icon>
        <CloseIcon onClick={() => handleSidebar(false)} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu onClick={() => handleSidebar(false)}>
          <SidebarLink to="/tutorial">학습하기</SidebarLink>
          <SidebarLink to="/quizlist">퀴즈</SidebarLink>
          <SidebarLink to="/cheatsheet">자습서</SidebarLink>
          <SidebarBtnWrap>
            <SidebarBtn
              onClick={() => {
                handleSidebar(false);
                dispatch(setModal('signIn'));
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
