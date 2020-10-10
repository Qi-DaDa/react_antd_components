/*
 * @LastEditors: 七大大
 * @Date: 2020-09-30
 * @LastEditTime: 2020-09-30
 * @FilePath: \myantdd:\products\react_antd_components\src\layouts\login\components\Create.tsx
 * @Description: 注册组件
 */

import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useHistory } from 'react-router-dom';
import styles from '../login.module.scss';

const DivCreate = () => {
  const { replace } = useHistory();
  return (
    <Form name="login" initialValues={{ username: '', password: '' }}>
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
      <Form.Item>
        <Button htmlType="submit" block>
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};
export default DivCreate;
