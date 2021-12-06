import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MdCancel } from 'react-icons/md';
import { BsCheckSquare } from 'react-icons/bs';
import { BsCheckSquareFill } from 'react-icons/bs';

export const Container = styled.div`
  display: ${({ isOpen }) => (isOpen ? '' : 'none')};
`;

function SideList({ list, moveIndex, isOpen, toggle }) {
  const clearList = useSelector((state) => state.list);

  const handleResetAnswer = () => {
    alert('모든 정답을 초기화했습니다.');
    toggle(false);
    localStorage.clear();
    window.location.replace('/tutorial');
  };

  return (
    <>
      <Container isOpen={isOpen}>
        <div>
          <MdCancel size="50" onClick={() => toggle(false)} />
        </div>
        <div>
          <div>
            <span>Choose a level</span>
          </div>
          <div>
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
        </div>
        <div>
          <button onClick={handleResetAnswer}>초기화</button>
        </div>
      </Container>
    </>
  );
}

export default SideList;
