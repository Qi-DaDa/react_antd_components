import React from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Demo from '../pages/demo';
import Login from '../layouts/login';
import Container from '../layouts/container';
import Home from '../pages/home';
import DivMethods from '../pages/div_methods';
import DivVideo from '../pages/video';
import DivMine from '../pages/mine';
import HighOrderComponent from '../pages/HighOrderComponent';
import DivIndex from '../layouts/index/index';
import EchartMap from '../pages/EchartMap';
// 页面路由
export const pagesRoute = [
  {
    key: '/index',
    path: '/',
    exact: true,
    title: 'DIV',
    component: DivIndex,
  },
  {
    key: '/login',
    path: '/login',
    exact: true,
    title: '登录页',
    component: Login,
  },
  {
    key: '/demo',
    path: '/demo',
    exact: true,
    title: '小案例',
    component: Demo,
  },
  {
    key: '/container',
    path: '/div',
    exact: false,
    title: '主页面',
    component: Container,
  },
];
export const navsRoute = [
  {
    key: '/div/methods',
    path: '/div/methods',
    exact: true,
    title: '首页',
    component: Home,
  },
  {
    key: '/div/home',
    path: '/div/home',
    exact: true,
    title: '方法',
    component: DivMethods,
  },
  {
    key: '/div/video',
    path: '/div/vide',
    exact: true,
    title: '视频',
    component: DivVideo,
  },
  {
    key: '/div/high-order-component',
    path: '/div/high-order-component',
    exact: true,
    title: '高阶组件',
    component: HighOrderComponent,
  },
  {
    key: '/div/echart-map',
    path: '/div/echart-map',
    exact: true,
    title: 'echart地图',
    component: EchartMap,
  },
  {
    key: '/div/mine',
    path: '/div/mine',
    exact: true,
    title: '个人中心',
    component: DivMine,
  },
];
