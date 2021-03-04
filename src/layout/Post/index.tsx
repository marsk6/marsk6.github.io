import React, { useEffect } from 'react';
import htmr from 'htmr';
import { useRouteData } from 'react-static';
import { Link, useLocation } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPost } from '@/redux/action';
import { initSideState } from '@/redux/reducer';
import { RootStoreState } from '@/redux';
import Toc from '@/components/Toc';
import Meta from './Meta';

import style from './index.scss';
// TODO: 文章之间的切换
const LATEST_CATALOG = 'latest';
const POST_PATH = 'post';

export default () => {
  const { post } = useRouteData();
  const location = useLocation();
  const dispatch = useDispatch();
  const subPath = location.pathname.replace(/\/(.+)\/.+/, '$1');
  const { catalog = LATEST_CATALOG } = location.search;
  const currentPost = useSelector<
    RootStoreState,
    RootStoreState['site']['currentPost']
  >(({ site }) => site.currentPost);
  useEffect(() => {
    dispatch(setCurrentPost(post));
    window.scrollTo({ top: 0 });
    return () => {
      dispatch(setCurrentPost(initSideState.currentPost));
    };
  }, [location.pathname]);

  return (
    <section className={style.post}>
      <header className={style.header}>
        <p>{post.title}</p>
        <Meta post={post} />
      </header>
      <div className="toc-container">
        {location.pathname.includes(POST_PATH) && currentPost?.toc && (
          <Toc>{htmr(currentPost?.toc)}</Toc>
        )}
      </div>
      <main className="markdown">{htmr(post.contents)}</main>
      <section className={style['footer-nav']}>
        <span>
          {post.prev[catalog] && (
            <Link to={`/post/${post.prev[catalog].id}`}>
              <span style={{ marginRight: '6px' }}>&laquo;</span>
              {post.prev[catalog].title}
            </Link>
          )}
        </span>
        <span>
          {post.next[catalog] && (
            <Link to={`/post/${post.next[catalog].id}`}>
              {post.next[catalog].title}
              <span style={{ marginLeft: '6px' }}>&raquo;</span>
            </Link>
          )}
        </span>
      </section>
    </section>
  );
};
