import React, { useState } from 'react';
import { Layout, Menu, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import DivHome from '../pages/home';
import LayoutHeader from './components/layout_header';
import LayoutSider from './components/layout_sider';
import styles from './layouts.module.scss';
import CustomBackTop from '../components/custom_back_top';
// import Particles from 'react-particles-js';
const Particles = require('react-particles-js');
const { Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;
const ParticlesParams = {
  particles: {
    number: {
      // 粒子的数量
      value: 160,
      density: {
        enable: false,
      },
    },
    line_linked: {
      enable: false,
    },
    // 粒子移动速度
    move: {
      direction: ['top', 'left'],
      speed: 1,
      random: true,
      out_mode: 'out',
    },
    size: {
      value: 1,
      anim: {
        //是否启用粒子速度
        enable: true,
        //  粒子动画频率
        speed: 10,
      },
    },
    opacity: {
      //粒子的透明度
      value: 0.9,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.05,
      },
    },
    color: {
      // 粒子的颜色
      value: ['#fff', '#00f', '#ff0'],
    },
    shape: {
      // 粒子的形状
      type: ['star', 'edge', 'triangle', 'polygon', 'image'],
    },
  },
  interactivity: {
    // events: {
    //   onhover: {
    //     enable: true,
    //     mode: 'bubble',
    //   },
    //   onclick: {
    //     enable: true,
    //     mode: 'repulse',
    //   },
    // },
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        size: 0,
        opacity: 0,
      },
      repulse: {
        distance: 400,
        duration: 4,
      },
    },
  },
  retina_detect: true,
};
const LayoutFrame = () => {
  return (
    <Layout className={styles.root_box}>
      {/* 背景 */}
      <Particles style={{ position: 'absolute' }} params={ParticlesParams} />
      {/* 侧边栏 */}
      <LayoutSider />
      {/* 主体 */}
      <Layout>
        {/* 头部 */}
        <LayoutHeader />
        {/* 内容 */}
        <QueueAnim
          id="aa"
          type="right"
          duration={1000}
          component={Content}
          className={styles.content}
        >
          <div>
            <DivHome key="DivHome" />
          </div>
          {/* 回到顶部 */}
          <CustomBackTop elementById="aa" />
        </QueueAnim>
        <Footer className={styles.footer}> 2020 @ DIV</Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutFrame;
