import React, { useState } from 'react';
import { Layout, Menu, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import DivHome from '../../pages/home';
import LayoutHeader from './components/layout_header';
import LayoutSider from './components/layout_sider';
import styles from './layouts.module.scss';
import CustomBackTop from '../../components/custom_back_top';
import particlesParams from '../../utils/particlesParams';
import NavsRoute from '../../routes/NavsRoute';
import { navsRoute } from '../../utils/routesList';
import { Route, Redirect } from 'react-router-dom';
const { Content, Footer } = Layout;

const LayoutFrame = () => {
  return (
    <Layout className={styles.root_box}>
      {/* 侧边栏 */}
      <LayoutSider />
      {/* 主体 */}
      <Layout>
        {/* 头部 */}
        <LayoutHeader />
        {/* 内容 */}
        <QueueAnim
          id="backTop"
          type="right"
          duration={1000}
          component={Content}
          className={styles.content}
        >
          <NavsRoute />
          {/* 回到顶部 */}
          <CustomBackTop elementById="backTop" />
        </QueueAnim>
        <Footer className={styles.footer}> 2020 @ DIV</Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutFrame;
