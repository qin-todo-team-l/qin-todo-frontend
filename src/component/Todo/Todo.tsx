import React, { useState } from 'react';

interface Props {
  todo: string;
}

export const Todo: React.VFC<Props> = ({ todo }) => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <input type='checkbox' className='pointer-events-none' checked={active} />
      <button className={`${active ? 'line-through' : undefined}`} onClick={() => setActive((prev) => !prev)}>
        {todo}
      </button>
    </div>
  );
};
