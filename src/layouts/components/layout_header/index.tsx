/*
 * @LastEditors: 七大大
 * @Date: 2020-08-21
 * @LastEditTime: 2020-09-06
 * @FilePath: \myantdd:\products\react_antd_components\src\layouts\components\layout_header\index.tsx
 * @Description: 布局头部
 */

import React, { useState, useEffect } from 'react';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import useHeader from './hook';
import styles from '../../layouts.module.scss';
const { Header } = Layout;

interface Props {}

const LayoutHeader: React.FunctionComponent<Props> = (props) => {
  const { aa } = useHeader('1234');
  console.log(aa);

  useEffect(() => {}, []);
  return (
    <Header className={styles.header}>
      <div className={styles.user}>
        <Avatar icon={<UserOutlined />} />
      </div>
    </Header>
  );
};
export default LayoutHeader;
