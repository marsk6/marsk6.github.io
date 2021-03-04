import React from 'react';
import Pagination from '@/components/Pagination';
import { useRouteData } from 'react-static';
import { Link } from '@reach/router';
import Meta from '@/layout/Post/Meta';
// import style from './index.scss';
// TODO: 切换分页回到顶部
const Main = () => {
  const { latest, totalPages, currentPage } = useRouteData();
  return (
    <main>
      <section>
        {latest.map((post) => (
          <section className="post-container" key={post.id}>
            <Link to={`/post/${post.id}`}>
              <p className="post-title">{post.title}</p>
              <p className="post-abstract">{post.desc}</p>
            </Link>
            <Meta post={post} />
          </section>
        ))}
      </section>
      <Pagination total={totalPages} current={currentPage} />
    </main>
  );
};

export default Main;
