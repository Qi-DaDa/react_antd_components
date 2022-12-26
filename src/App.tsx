import React from 'react';
import './assets/styles/index.less';
import PagesRoute from './routes/PagesRoute';
import particlesParams from './utils/particlesParams';
const ReactWatermark = require('react-watermark-module')
const Particles = require('react-particles-js');
const imagePath = require('./assets/images/logo.jpg')
const App = () => {
  return (
    <>
      {/* 背景 */}
      <Particles
        style={{ position: 'fixed', top: 0 }}
        params={particlesParams}
      />
      {/* 水印 */}
      {/* <ReactWatermark
        imagePath={imagePath} //必须，对象，背景图片
        textData={'红掌拨清波'} //必须，字符串，水印内容
        type={'text'} //必须，水印类型
      /> */}
      {/* 页面路由 */}
      <PagesRoute />
    </>
  );
};

export default App;
