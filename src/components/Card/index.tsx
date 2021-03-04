import React, { ReactNode } from 'react';

import style from './index.scss';

type Props = {
  children?: ReactNode;
  title?: string | ReactNode;
};

const Card: React.FC<Props> = (props) => {
  const { children, title } = props;
  return (
    <div className={style.card}>
      <div className={style.title}>{title}</div>
      {children}
    </div>
  );
};

export default Card;
