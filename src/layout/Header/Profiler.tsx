import React from 'react';
import classnames from 'classnames';
import './index.scss';
import avatar from '@/assets/img/avatar.png';

// TODO: list 的 scss

const Profiler = () => {
  return (
    <section className={classnames('profiler')}>
      <a href="/" className="avatar">
        <img src={avatar} alt="avatar" title="marsk'blog" />
      </a>
      <div className="site-title vertical-text">
        {/* <h3 className="site-title-small">
          <a href="/" className="a-title">
            Simple Programmer
          </a>
        </h3> */}

        <h1 className="site-title-large">
          <a href="/" title="marsk'blog" className="a-title">marsk'blog</a>
        </h1>
      </div>
    </section>
  );
};

export default Profiler;
