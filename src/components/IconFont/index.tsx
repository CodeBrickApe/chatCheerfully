import cx from 'clsx';
import React from 'react';

interface PropTypes {
  type: string;
  className?: string;
}
const Iconfont: React.FC<PropTypes> = ({ className, type }) => {
  return (
    <svg className={cx('w-5 h-5 inline-block', className)} aria-hidden="true">
      <use xlinkHref={`#${type}`}></use>
    </svg>
  );
};

export default Iconfont;
