/*
 * @LastEditors: 七大大
 * @Date: 2020-09-07
 * @LastEditTime: 2020-10-27
 * @FilePath: \myantdd:\products\react_antd_components\src\pages\demo\index.jsx
 * @Description: Demo页面
 */
import React, { useState, useEffect, useRef } from 'react';
import ReactWatermark from 'react-watermark-module'
const imagePath = require('../../assets/images/bg-bd.png')
const DivDemo = () => {
  return (
    <div>
      <ReactWatermark
        imagePath={imagePath} //必须，对象，背景图片
        textData={'版权所有,翻版必究'} //必须，字符串，水印内容
        textPosition={'center'} //水印位置，默认右下角，支持字符串：leftTop、leftBottom、rightTop、rightBottom、center，也支持自定义位置，用数组表示 [x, y]
        transparent={0} //非必须，文字透明度
        type={'text'} //必须，水印类型
      />
    </div>
  );
};
export default DivDemo;
