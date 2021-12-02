import React from 'react';
import { MdCancel } from 'react-icons/md';

function SideList({ list }) {
  return (
    <>
      <div>
        <div>
          <MdCancel size="50" />
        </div>
        <div>
          <ol>
            {list.map((el) => (
              <li key={el.id}>{el.title}</li>
            ))}
          </ol>
        </div>
        <div>
          <button>초기화</button>
        </div>
      </div>
    </>
  );
}

export default SideList;
