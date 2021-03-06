import React from 'react';
import classnames from 'classnames';
import { Link } from '@reach/router';
// import './index.scss';

type Props = {
  current?: number;
  total: number;
  hideOnSinglePage?: boolean;
};

const ONLY_ONE_PAGE = 1

const Pagination: React.FC<Props> = (props) => {
  const { total, current,hideOnSinglePage } = props;
  if (hideOnSinglePage) {
    return null;
  }
  const prev = current - 1;
  const next = current + 1;
  if (total === ONLY_ONE_PAGE) {
    return null;
  }
  return (
    <div className="pagination">
      {prev > 1 && <Link to={`page/${prev}`}>prev</Link>}
      &nbsp;
      <span>
        <Link to={`page/${current}`} className="page-item active">
          {current}
        </Link>
        &nbsp;&nbsp;/&nbsp;&nbsp;{total}
      </span>
      &nbsp;
      {next < total && <Link to={`page/${next}`}>next</Link>}
    </div>
  );
};

Pagination.defaultProps = {
  hideOnSinglePage: false,
  current: 1,
};

export default Pagination;
