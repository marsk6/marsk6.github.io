import React from 'react';
import classnames from 'classnames';
import avatar from '@/assets/img/avatar.png';
import './index.scss';

// TODO: list 的 scss

const Profiler = () => {
  return (
    <section className="profiler">
      {/* <a href="/" className="avatar">
        <img src={avatar} alt="avatar" title="marsk'blog" />
      </a> */}
      <div>
        {/* <h3 className="site-title-small">
          <a href="/" className="a-title">
            Simple Programmer
          </a>
        </h3> */}

        <h2 className="site-title">
          <a href="/" title="marsk'blog" className="a-title">marsk'blog</a>
        </h2>
      </div>
    </section>
  );
};

export default Profiler;
