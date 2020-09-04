/*
 * @LastEditors: 七大大
 * @Date: 2020-08-21
 * @LastEditTime: 2020-09-04
 * @FilePath: \myantdd:\products\react_antd_components\src\layouts\components\layout_header\index.tsx
 * @Description: 布局头部
 */

import React, { useState } from 'react';
import { Layout, Avatar } from 'antd';
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import styles from '../../layouts.module.scss';
const { Header } = Layout;

interface Props {
  collapsed: boolean; // 侧边栏控制
  onCollapsed: () => void; // 控制侧边事件
}

const LayoutHeader: React.FunctionComponent<Props> = (props) => {
  const { collapsed, onCollapsed } = props;
  return (
    <Header className={styles.header}>
      <div className={styles.switch} onClick={onCollapsed}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div className={styles.user}>
        <Avatar icon={<UserOutlined />} />
      </div>
    </Header>
  );
};
export default LayoutHeader;
