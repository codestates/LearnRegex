import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineUnorderedList } from 'react-icons/ai';

function SideHint({ level, hint }) {
  return (
    <>
      <div>
        <div>
          <div>
            <span>Level {level} of 30</span>
          </div>
          <div>
            <IoIosArrowBack size="50" />
            <IoIosArrowForward size="50" />
          </div>
          <div>
            <AiOutlineUnorderedList size="50" />
          </div>
        </div>
        <div>해설: {hint}</div>
      </div>
    </>
  );
}

export default SideHint;
