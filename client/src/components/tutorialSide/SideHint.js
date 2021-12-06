import React from 'react';
import { useSelector } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsCheckSquare } from 'react-icons/bs';
import { BsCheckSquareFill } from 'react-icons/bs';

// 튜토리얼 페이지에서 바로 보여지는 힌트 부분입니다.
function SideHint({ current, hint, movePrev, moveNext, toggle }) {
  // console.log(hint);
  const clearList = useSelector((state) => state.list);
  console.log(clearList);

  return (
    <>
      <div>
        <div>
          <div>
            {/* level = 현재 단계 / 부모에서 (현재 인덱스(current) + 1)로 받아와요! 배열이기 때문에 +1 했습니다. */}
            <div>
              <span>Level {current + 1} of 30</span>
            </div>
            <div>{clearList[current] ? <BsCheckSquareFill size="50" color="green" /> : <BsCheckSquare size="50" />}</div>
          </div>
          <div>
            {/* 왼쪽, 오른쪽 가르키고 있는 화살표 아이콘 */}
            <IoIosArrowBack onClick={movePrev} size="50" />
            <IoIosArrowForward onClick={moveNext} size="50" />
          </div>
          <div>
            {/* 목차 아이콘 - 클릭하면 SideList 컴포넌트 보여줘야함 */}
            <AiOutlineUnorderedList size="50" onClick={toggle} />
          </div>
        </div>
        {/* hint = 현재 목록(list[current])의 hint 값 / 부모에서 (list[current].hint)로 받아와요! 더미데이터 확인해보시면 hint 키가 있습니다. */}
        <div>해설: {hint}</div>
      </div>
    </>
  );
}

export default SideHint;
