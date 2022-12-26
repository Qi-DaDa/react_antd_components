/*
 * @LastEditors: 七大大
 * @Date: 2020-10-09
 * @LastEditTime: 2020-10-12
 * @FilePath: \myantdd:\products\react_antd_components\src\pages\HighOrderComponent\components\InnerComponent.tsx
 * @Description: 高阶组件的引入组件
 */
import React from 'react';
import Hoc from "./Hoc";
const InnerComponent = (props: any) => {
  const { num, onUpdata } = props;

  return (
    <div>
      <div
        // onClick={onUpdata}
        style={{ cursor: 'pointer' }}>
        demo1-{num}
      </div>
    </div>
  );
};
export default Hoc(InnerComponent);
