import { Select } from 'antd';
import React from 'react';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const SelectChartProduct = () => (
  <Select
    defaultValue="Page A"
    style={{
      width: 200,
    }}
    onChange={handleChange}
    options={[
      {
        label: 'Manager',
        options: [
          {
            label: 'Page A',
            value: 'Page A',
          },
          {
            label: 'Page B',
            value: 'Page B',
          },
        ],
      },
      {
        label: 'Engineer',
        options: [
          {
            label: 'yiminghe',
            value: 'Yiminghe',
          },
        ],
      },
    ]}
  />
);
export default SelectChartProduct;