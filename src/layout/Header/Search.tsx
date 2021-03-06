import React, { useState, useRef, useEffect } from 'react';
import Fuse from 'fuse.js';
import { useSelector } from 'react-redux';
import { Link } from '@reach/router';
import { RootStoreState } from '@/redux';
import { Post } from '@/redux/reducer';
import { stripe } from '@/utils';
import './index.scss';

type Props = {};

const Search: React.FC<Props> = () => {
  const fuse = useRef<Fuse<unknown>>();
  const [showResult, setShowResult] = useState(false);
  const archive = useSelector<
    RootStoreState,
    RootStoreState['site']['archive']
  >(({ site }) => site.archive);
  const [result, setResult] = useState<Array<{ item: Post }>>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const list: Post[] = [];
    Object.values(archive).forEach((value) => {
      value.forEach((post) => {
        const nextPost = { ...post };
        nextPost.contents = stripe(nextPost.contents);
        list.push(nextPost);
      });
    });
    fuse.current = new Fuse(list, {
      keys: ['contents'],
      ignoreLocation: true
    });
  }, [archive]);

  const handleHideResult = (e) => {
    if (result.length !== 0) {
      // FIXME: 触发隐藏，link 无法跳转
      // TODO: 全部元素设置 transition
      setTimeout(() => {
        setShowResult(false);
      }, 100)
    }
  };

  const handleSearch = (e) => {
    const result = (fuse.current.search(e.target.value) as unknown) as Array<{
      item: Post;
    }>;
    setFilter(e.target.value);
    setResult(result);
    setShowResult(result.length !== 0);
  };
  const input = (
    <input
      placeholder="Google"
      autoComplete="off"
      spellCheck="false"
      onInput={handleSearch}
    />
  );

  const match = (
    <div className="search-match" style={{ display: showResult ? 'block' : 'none' }}>
      {result.map(({ item: post }) => {
        const index = post.contents.indexOf(filter);
        return (
          <Link
            to={`/post/${post.id}`}
            key={post.id}
            className="match-post"
          >
            <span className="match-title">{post.title}</span>
            <span className="match-content">
              <span className="match-filter">{filter}</span>
              {post.contents.slice(index, index + 20)}
            </span>
          </Link>
        );
      })}
    </div>
  );

  return (
    <div className="search" onBlur={handleHideResult}>
      {input}
      {match}
    </div>
  );
};

export default Search;
