import React, { useState } from 'react';
import { cx } from '@emotion/css';
import type { ReactNode } from 'react';

type CardProps = Partial<{
  className: string;
  title: ReactNode;
}>;
const Card: React.FC<CardProps> = ({ title, children, className }) => {
  const haveTitle = Boolean(title);
  return (
    <section
      className={cx(
        'rounded-lg border border-gray-900 border-opacity-10 bg-white dark:bg-slate-800',
        {
          'p-4': !haveTitle,
        },
        className
      )}
    >
      {haveTitle && (
        <header className='border-b p-3 text-xl font-bold'>{title}</header>
      )}
      {children}
    </section>
  );
};

export default Card;
