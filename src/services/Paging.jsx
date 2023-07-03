import React from 'react';
import { Pagination } from 'antd';

const Paging = () => (
  <div>
    <Pagination
      total={85}
      showTotal={(total) => `Total ${total} items`}
      defaultPageSize={20}
      defaultCurrent={1}
    />
  </div>
);

export default Paging;
