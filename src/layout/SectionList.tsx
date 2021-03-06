import React from 'react';
import { useRouteData } from 'react-static';
import { Link } from '@reach/router';

const SectionList = () => {
  const { catalog, count, catalogName } = useRouteData();
  const withoutYear = 5;
  return (
    <section className="list-with-title">
      <p className="post-title">目前共计 {count} 篇</p>
      {Object.keys(catalog).map((name) => (
        <section className="archive" key={name}>
          <div className="listing-title" id={name}>
            <h4 className="ar-year">{name}</h4>
          </div>
          <ul className="listing">
            {catalog[name].map((post) => (
              <div key={post.id} className="listing-item">
                <span style={{ marginRight: '24px' }}>
                  {post.date.slice(catalogName === 'archive' ? withoutYear : 0)}
                </span>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </div>
            ))}
          </ul>
        </section>
      ))}
      <h3></h3>
    </section>
  );
};

export default SectionList;
