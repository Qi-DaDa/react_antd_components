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
import Mine from '../pages/mine';
// 页面路由
export const pagesRoute = [
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
    key: '/div/home',
    path: '/div/home',
    exact: true,
    title: '首页',
    component: Home,
  },
  {
    key: '/div/mine',
    path: '/div/mine',
    exact: true,
    title: '个人中心',
    component: Mine,
  },
];
