import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

interface Props {
  todo: string;
}

export const Todo: React.VFC<Props> = ({ todo }) => {
  const [active, setActive] = useState(false);
  const [focus, setFocus] = useState(false);
  const [open, setOpen] = useState(false);

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      console.log('User Swiped!', eventData);
      if (eventData.dir === 'Left') {
        setOpen(true);
      } else if (eventData.dir === 'Right') {
        setOpen(false);
      }

      console.log(open);
      return false;
    },
  });

  return (
    <div className={`${focus ? 'bg-yellow-100' : ''} grid grid-flow-col justify-between  w-full relative`}>
      <button
        {...handlers}
        onClick={() => {
          setFocus((prev) => !prev);
          setOpen(false);
        }}
      >
        <input type='checkbox' onChange={() => setActive((prev) => !prev)} />
        <span className={active ? 'line-through' : ''}>{todo}</span>
      </button>
      <div className={`relative overflow-hidden transition-all duration-200 ${open && !focus ? 'w-12' : 'w-0'}`}>
        <button className='bg-red-500 text-white px-2 whitespace-nowrap'>削除</button>
      </div>
    </div>
  );
};
