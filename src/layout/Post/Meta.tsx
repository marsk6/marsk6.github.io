import React from 'react';
import { Link } from '@reach/router';

type Props = {
  post: any;
};

const Meta: React.FC<Props> = (props) => {
  const { post } = props;
  console.log(post);
  return (
    <>
      <div className="post-meta">
        <span className="date meta-item">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
          <span>{post.date}</span>
        </span>
        <span className="meta-item">
          <i className="fa fa-folder" aria-hidden="true"></i>
          <Link to={`/category#${post.category}`} className="a-tag">
            {post.category}
          </Link>
        </span>
        {post.tag && (
          <span className="meta-item">
            <i className="fa fa-tag" aria-hidden="true"></i> {post.tag}
          </span>
        )}
      </div>
    </>
  );
};

export default Meta;
