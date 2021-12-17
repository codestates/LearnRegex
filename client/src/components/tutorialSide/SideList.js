import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { Container, CloseIcon, ClearIcon, NotClearIcon, ResetButton } from './SideList.styled';

function SideList({ list, moveIndex, isOpen, toggle }) {
  const dispatch = useDispatch();
  const clearList = useSelector((state) => state.list);

  return (
    <>
      <Container className="list" isOpen={isOpen}>
        <div className="closeIcon">
          <CloseIcon onClick={() => toggle(false)} />
        </div>
        <div className="listBox">
          <ul>
            {list.map((el, idx) => (
              <li
                key={el.id}
                onClick={() => {
                  moveIndex(el.id);
                  toggle();
                }}
              >
                <div className="listTitle">
                  <span list>
                    {el.id}. {el.title}
                  </span>
                  {clearList[idx] ? <ClearIcon /> : <NotClearIcon />}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="buttonBox">
          <ResetButton onClick={() => dispatch(setModal('deleteAnswerConfirm'))}>초기화</ResetButton>
        </div>
      </Container>
    </>
  );
}

export default SideList;
