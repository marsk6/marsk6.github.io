import React from 'react';
import classnames from 'classnames';

type Props = {
  size?: 'normal' | 'small';
  type?: 'default' | 'primary' | 'outline';
};

const Badge: React.FC<Props> = (props) => {
  const { type, children } = props;
  return (
    <span className={classnames('badge', `badge-${type}`)}>{children}</span>
  );
};

Badge.defaultProps = {
  size: 'normal',
  type: 'default',
};

export default Badge;
