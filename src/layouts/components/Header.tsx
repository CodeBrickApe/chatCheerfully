import React from 'react';

import { IconFont } from '@/components';

interface PropTypes {
  title?: string;
}
const Header: React.FC<PropTypes> = (props) => {
  return (
    <div className="bg-white flex border-b border-gray-200 items-center justify-between ">
      <IconFont type="icon-caidan" className="block sm:hidden" />
      <div>
        <IconFont type="icon-youxiting" className="" />

        <strong>看板</strong>
      </div>
      <IconFont type="icon-yonghuguanli1" className="" />
    </div>
  );
};

export default Header;
