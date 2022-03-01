import React, { useState } from 'react';

interface Props {
  todo: string;
}

export const Todo: React.VFC<Props> = ({ todo }) => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <button className={`${active ? 'text-red-500' : 'text-blue-500'}`} onClick={() => setActive((prev) => !prev)}>
        {todo}
      </button>
    </div>
  );
};
