import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { HeaderContainer, TitleContainer, CloseIcon, ClearIcon, NotClearIcon, ResetButton } from './SideList.styled';
import { Span } from './SideHint.styled';

function SideList({ list, moveIndex, isOpen, toggle }) {
  const dispatch = useDispatch();
  const clearList = useSelector((state) => state.list);

  return (
    <>
      <HeaderContainer>
        <Span size={2} family={'Semibold'}>
          Choose a Level
        </Span>
        <CloseIcon onClick={() => toggle(false)} />
      </HeaderContainer>
      <hr />
      <ul>
        {list.map((el, idx) => (
          <li
            key={el.id}
            onClick={() => {
              moveIndex(el.id);
              toggle();
            }}
          >
            <TitleContainer>
              {/* {el.id}-&nbsp; */}
              <Span padding={0.1} size={1.2} cursor={'pointer'} color={'dark-gray'} hovercolor={'black'} hoverbackcolor={'light-blue'}>
                {el.id}.&nbsp;&nbsp;{el.title}
              </Span>
              {clearList[idx] ? <ClearIcon /> : <NotClearIcon />}
            </TitleContainer>
          </li>
        ))}
      </ul>
      <ResetButton onClick={() => dispatch(setModal('deleteAnswerConfirm'))}>초기화</ResetButton>
    </>
  );
}

export default SideList;
