import React from 'react';
import { MdCancel } from 'react-icons/md';

// SideHint의 목차 아이콘 클릭시 보여지는 튜토리얼 목차 컴포넌트
function SideList({ list, moveIndex }) {
  return (
    <>
      <div>
        <div>
          {/* X 모양 아이콘 - 클릭하면 SideList 컴포넌트 숨김 */}
          <MdCancel size="50" />
        </div>
        <div>
          {/* <ul> 태그가 아닌 <ol> 태그 쓴 이유: 순서가 있는 목차이기 때문 */}
          <ol>
            {/* list 배열 각 요소의 title을 li 태그를 통해 보여줌 */}
            {list.map((el) => (
              <li
                key={el.id}
                onClick={() => {
                  moveIndex(el.id);
                }}
              >
                {el.title}
              </li>
            ))}
          </ol>
        </div>
        <div>
          {/* 초기화 버튼 - 클릭하면 로컬 스토리지에 저장된 튜토리얼 정답 삭제 */}
          <button>초기화</button>
        </div>
      </div>
    </>
  );
}

export default SideList;
