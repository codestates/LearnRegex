import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { saveAnswer } from '../../modules/answer';
import { MdCancel } from 'react-icons/md';

export const Container = styled.div`
  display: ${({ isOpen }) => (isOpen ? '' : 'none')};
`;

// SideHint의 목차 아이콘 클릭시 보여지는 튜토리얼 목차 컴포넌트
function SideList({ list, moveIndex, isOpen, toggle }) {
  const dispatch = useDispatch();

  const handleResetAnswer = () => {
    alert('모든 정답을 초기화했습니다.');
    moveIndex(1);
    toggle();
    dispatch(saveAnswer(''));
    window.location.replace('/tutorial');
  };

  return (
    <>
      <Container isOpen={isOpen}>
        <div>
          {/* X 모양 아이콘 - 클릭하면 SideList 컴포넌트 숨김 */}
          <MdCancel size="50" onClick={toggle} />
        </div>
        <div>
          {/* <ul> 태그가 아닌 <ol> 태그 쓴 이유: 순서가 있는 목차이기 때문 */}
          <div>
            <span>Choose a level</span>
          </div>
          <div>
            <ol>
              {/* list 배열 각 요소의 title을 li 태그를 통해 보여줌 */}
              {list.map((el) => (
                <li
                  key={el.id}
                  onClick={() => {
                    moveIndex(el.id);
                    toggle();
                  }}
                >
                  {el.title}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div>
          {/* 초기화 버튼 - 클릭하면 로컬 스토리지에 저장된 튜토리얼 정답 삭제 */}
          <button onClick={handleResetAnswer}>초기화</button>
        </div>
      </Container>
    </>
  );
}

export default SideList;
