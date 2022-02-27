import React from 'react';

interface Props {
  children: string;
}

export const Body: React.VFC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
