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
    <button
      {...handlers}
      className={`${focus ? 'bg-yellow-50' : ''} grid grid-flow-col justify-between  w-full `}
      onClick={() => {
        setFocus((prev) => !prev);
        setOpen(false);
      }}
    >
      <div>
        <input type='checkbox' onChange={() => setActive((prev) => !prev)} />
        <span className={active ? 'line-through' : ''}>{todo}</span>
      </div>
      <div className='relative overflow-hidden'>
        <button className='bg-red-500 text-white px-2'>削除</button>
        <div
          className={`${
            open && !focus ? '-translate-x-full' : ''
          } bg-white absolute top-0 left-0 w-full h-full transition-transform duration-200`}
        ></div>
      </div>
    </button>
  );
};
