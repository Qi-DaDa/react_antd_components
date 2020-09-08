import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { navsRoute } from '../../../../utils/routesList';
import { Link } from 'react-router-dom';
import styles from '../../layouts.module.scss';
const { Sider } = Layout;
const { SubMenu } = Menu;

interface Props {}

const LayoutSider: React.FunctionComponent<Props> = (props) => {
  return (
    <Sider collapsible className={styles.sider}>
      <div className={styles.logo}>DIV</div>
      <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
        {navsRoute && navsRoute.length
          ? navsRoute.map((item, key) => {
              return (
                <Menu.Item key={key} icon={<DesktopOutlined />}>
                  <Link to={item.path}>{item.title}</Link>
                </Menu.Item>
              );
            })
          : null}
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};
export default LayoutSider;
