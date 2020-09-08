import React from 'react';
import './assets/styles/index.less';
import PagesRoute from './routes/PagesRoute';
import particlesParams from './utils/particlesParams';
const Particles = require('react-particles-js');
const App = () => {
  return (
    <>
      {/* 背景 */}
      <Particles style={{ position: 'absolute' }} params={particlesParams} />
      {/* 页面路由 */}
      <PagesRoute />
    </>
  );
};

export default App;
