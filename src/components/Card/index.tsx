import React, { ReactNode } from 'react';

import './index.scss';

type Props = {
  children?: ReactNode;
  title?: string | ReactNode;
};

const Card: React.FC<Props> = (props) => {
  const { children, title } = props;
  return (
    <div className="card">
      <div className="title">{title}</div>
      {children}
    </div>
  );
};

export default Card;
