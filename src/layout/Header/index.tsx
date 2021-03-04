import React from 'react';
import classnames from 'classnames';
import { Link, useLocation } from '@reach/router';

import Profiler from '@/layout/Header/Profiler';

import Search from './Search';

import style from './index.scss';

// TODO: 配置化 header
// TODO: 如何引入 svg 并可设置样式

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const { pathname } = useLocation();
  return (
    <header className={classnames(style.header, 'rounded', 'shadow-s m')}>
      <Profiler />
      <nav className="site-title-links">
        <ul>
          <li>
            <Link to="/" className={classnames(style['nav-item'])}>
              首页
            </Link>
          </li>
          <li>
            <Link to="/archive" className={style['nav-item']}>
              归档
            </Link>
          </li>
          <li>
            <Link to="/category" className={style['nav-item']}>
              分类
            </Link>
          </li>
          <li></li>
        </ul>
        {/* <span className={style['nav-item']}>搜索</span> */}
      </nav>

      {/* <Search /> */}

      {/* <div className={style['social']}>
        <a>
          <i className="bi bi-github" />
        </a>
        <a>
          <i className="bi bi-github" />
        </a>
      </div>
      <p style={{ fontSize: '12px' }}>power by react-static</p> */}
    </header>
  );
};

export { Header };
