/*
 * @LastEditors: 七大大
 * @Date: 2020-10-09
 * @LastEditTime: 2020-10-09
 * @FilePath: \myantdd:\products\react_antd_components\src\pages\HighOrderComponent\index.tsx
 * @Description: 高阶组件
 */
import React from 'react';
import HeightDemo1 from './components/HeightDemo1';
import HeightDemo2 from './components/HeightDemo2';
import Hoc from './components/Hoc';

const HighOrderComponent = () => {
  const HocHeightDemo1 = Hoc(HeightDemo1);
  const HocHeightDemo2 = Hoc(HeightDemo2);
  return (
    <div>
      <div>
        <HocHeightDemo1 props1="1111" />
      </div>
      <div>
        <HocHeightDemo2 props2="2222" />
      </div>
    </div>
  );
};
export default HighOrderComponent;
