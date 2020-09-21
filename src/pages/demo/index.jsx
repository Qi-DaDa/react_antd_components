/*
 * @LastEditors: 七大大
 * @Date: 2020-09-07
 * @LastEditTime: 2020-09-09
 * @FilePath: \myantdd:\products\react_antd_components\src\pages\demo\index.jsx
 * @Description: Demo页面
 */
import React, { useState, useEffect, useRef } from 'react';
import { Parallax } from 'rc-scroll-anim';

const DivDemo = () => {
  return (
    <div>
      <Parallax
        animation={{ x: 0 }}
        style={{ transform: 'translateX(-100px)', margin: '10px auto' }}
        className="code-box-shape"
      />
      <Parallax
        animation={{ scale: 1 }}
        style={{ transform: 'scale(0)', margin: '10px auto' }}
        className="code-box-shape"
      />
      <Parallax
        animation={{ rotate: 360 }}
        style={{ margin: '10px auto' }}
        className="code-box-shape"
      />
    </div>
  );
};
export default DivDemo;
