/*
 * @LastEditors: 七大大
 * @Date: 2020-08-21
 * @LastEditTime: 2020-09-09
 * @FilePath: \myantdd:\products\react_antd_components\src\layouts\container\components\layout_header\index.tsx
 * @Description: 布局头部
 */

import React from 'react';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import useHeader from './hook';
import styles from '../../layouts.module.scss';
const { Header } = Layout;

interface Props {}

const LayoutHeader: React.FunctionComponent<Props> = (props) => {
  const { badsoup, getBadsoupApi } = useHeader(props);
  return (
    <Header className={styles.header}>
      <div></div>
      <div className={styles.badsoup} onClick={getBadsoupApi}>
        <span>{badsoup}</span>
      </div>
      <div className={styles.user}>
        <Avatar icon={<UserOutlined />} />
      </div>
    </Header>
  );
};
export default LayoutHeader;
