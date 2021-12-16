import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { BsCheckSquare } from 'react-icons/bs';
import { BsCheckSquareFill } from 'react-icons/bs';
import { Container, CloseIcon } from './SideList.styled';

function SideList({ list, moveIndex, isOpen, toggle }) {
  const dispatch = useDispatch();
  const clearList = useSelector((state) => state.list);

  return (
    <>
      <Container className="list" isOpen={isOpen}>
        <div className="header">
          <span>Choose a level</span>
          <CloseIcon onClick={() => toggle(false)} />
        </div>
        <div className="li">
          <ol>
            {list.map((el, idx) => (
              <li
                key={el.id}
                onClick={() => {
                  moveIndex(el.id);
                  toggle();
                }}
              >
                <div>
                  <div>{clearList[idx] ? <BsCheckSquareFill size="50" color="green" /> : <BsCheckSquare size="50" />}</div>
                  <div>{el.title}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="button">
          <button onClick={() => dispatch(setModal('deleteAnswerConfirm'))}>초기화</button>
        </div>
      </Container>
    </>
  );
}

export default SideList;
