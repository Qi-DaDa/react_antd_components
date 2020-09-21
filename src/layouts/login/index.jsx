/*
 * @LastEditors: 七大大
 * @Date: 2020-09-07
 * @LastEditTime: 2020-09-09
 * @FilePath: \myantdd:\products\react_antd_components\src\layouts\login\index.jsx
 * @Description: 登录页面
 */
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import styles from './login.module.scss';

const DivLogin = () => {
  const [isShow, setIsShow] = useState(false);
  const { replace } = useHistory();
  const onFinish = (values) => {
    message.success('登录成功');
    replace({ pathname: '/div' });
  };
  return (
    <div className={styles.login}>
      {isShow ? (
        <Form
          name="login"
          initialValues={{ username: '', password: '' }}
          onFinish={onFinish}
          className={styles.container}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input placeholder="请输入密码" />
          </Form.Item>
          <Form.Item style={{ display: 'none' }}>
            <Button htmlType="submit" block></Button>
          </Form.Item>
        </Form>
      ) : (
        <div className={styles.login_bell} onClick={() => setIsShow(true)}>
          <PoweroffOutlined />
        </div>
      )}
    </div>
  );
};
export default DivLogin;
