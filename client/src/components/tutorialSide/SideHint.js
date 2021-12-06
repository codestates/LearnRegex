import React from 'react';
import { useSelector } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsCheckSquare } from 'react-icons/bs';
import { BsCheckSquareFill } from 'react-icons/bs';

function SideHint({ hint, movePrev, moveNext, toggle }) {
  const { index } = useSelector((state) => state.bookmark);
  const clearList = useSelector((state) => state.list);

  return (
    <>
      <div>
        <div>
          <div>
            <div>
              <span>Level {index + 1} of 30</span>
            </div>
            <div>{clearList[index] ? <BsCheckSquareFill size="50" color="green" /> : <BsCheckSquare size="50" />}</div>
          </div>
          <div>
            <IoIosArrowBack onClick={movePrev} size="50" />
            <IoIosArrowForward onClick={moveNext} size="50" />
          </div>
          <div>
            <AiOutlineUnorderedList size="50" onClick={() => toggle(true)} />
          </div>
        </div>
        <div>해설: {hint}</div>
      </div>
    </>
  );
}

export default SideHint;
