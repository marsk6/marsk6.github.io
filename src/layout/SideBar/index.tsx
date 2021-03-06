import React, { useCallback } from 'react';
import classnames from 'classnames';
import Badge from '@/components/Badge';
import Card from '@/components/Card';
import { useLocation } from '@reach/router';
import { useSelector } from 'react-redux';
import { RootStoreState } from '@/redux';

import style from './index.scss';
import { Link } from '@reach/router';



const SideBar = () => {
  const { category, archive } = useSelector((state) => state.site);

  const categoryTitle = (
    <Link to="/category" className={style['card-title']}>
      分类
    </Link>
  );
  const archiveTitle = (
    <Link to="/archive" className={style['card-title']}>
      归档
    </Link>
  );
  const currentPost = useSelector<
    RootStoreState,
    RootStoreState['site']['currentPost']
  >(({ site }) => site.currentPost);

  const location = useLocation();
  return (
    <aside className={style.sidebar}>
      {/* <Card title={categoryTitle}>
        <ul className="menu-list">
          {Object.keys(category).map((name) => (
            <li key={name} className="menu-item">
              <Link to={`/category#${name}`} className={classnames(style['list-item'])}>
                <span>{name}</span>
                <Badge>{category[name].length}</Badge>
              </Link>
            </li>
          ))}
        </ul>
      </Card>
      <Card title={archiveTitle}>
        <ul className="filter-list">
          {Object.keys(archive).map((name) => (
            <li key={name} className="filter-item">
              <Link to={`/archive#${name}`} className={classnames(style['list-item'])}>
                <span>{name}</span>
                <Badge type="outline">{archive[name].length}</Badge>
              </Link>
            </li>
          ))}
        </ul>
      </Card> */}

    </aside>
  );
};

export { SideBar };
