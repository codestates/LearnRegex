import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { Container, CloseIcon, ClearIcon, NotClearIcon, ResetButton } from './SideList.styled';

function SideList({ list, moveIndex, isOpen, toggle }) {
  const dispatch = useDispatch();
  const clearList = useSelector((state) => state.list);

  return (
    <>
      <CloseIcon onClick={() => toggle(false)} />
      <ul>
        {list.map((el, idx) => (
          <li
            key={el.id}
            onClick={() => {
              moveIndex(el.id);
              toggle();
            }}
          >
            <span list>
              {el.id}. {el.title}
            </span>
            {clearList[idx] ? <ClearIcon /> : <NotClearIcon />}
          </li>
        ))}
      </ul>
      <ResetButton onClick={() => dispatch(setModal('deleteAnswerConfirm'))}>초기화</ResetButton>
    </>
  );
}

export default SideList;
