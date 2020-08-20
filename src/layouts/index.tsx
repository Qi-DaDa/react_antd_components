import React, { useState } from 'react';
import { Layout, Menu, Avatar } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import DivHome from '../pages/home';
import styles from './style.module.scss';
const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;
const LayoutFrame = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className={styles.root_box}>
      <Sider collapsible collapsed={collapsed} trigger={null}>
        <div className={styles.logo}>DIV</div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header className={styles.header} key="Header">
          <div
            className={styles.switch}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
          <div className={styles.user}>
            <Avatar icon={<UserOutlined />} />
          </div>
        </Header>

        <Content className={styles.content}>
          <QueueAnim type="right" duration={1000}>
            <DivHome key="DivHome" />
          </QueueAnim>
        </Content>
        <Footer className={styles.footer}> 2020 @ DIV</Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutFrame;
