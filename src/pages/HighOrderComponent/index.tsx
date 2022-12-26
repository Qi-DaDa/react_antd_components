/*
 * @LastEditors: 七大大
 * @Date: 2020-10-09
 * @LastEditTime: 2020-10-12
 * @FilePath: \myantdd:\products\react_antd_components\src\pages\HighOrderComponent\index.tsx
 * @Description: 高阶组件
 */
import React from 'react';
import InnerComponent from './components/InnerComponent';
const HighOrderComponent = () => {
  return (
    <div>
      <div>
        <InnerComponent props1="1111" aaa='123' />
      </div>
    </div>
  );
};
export default HighOrderComponent;
