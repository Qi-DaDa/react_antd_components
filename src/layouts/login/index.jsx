/*
 * @LastEditors: 七大大
 * @Date: 2020-09-07
 * @LastEditTime: 2020-09-30
 * @FilePath: \myantdd:\products\react_antd_components\src\layouts\login\index.jsx
 * @Description: 登录/注册页面
 */
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import Login from './components/Login';
import Create from './components/Create';
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
        <div className={styles.container}>
          <Login />
          <Create />
        </div>
      ) : (
        <div className={styles.login_bell} onClick={() => setIsShow(true)}>
          <PoweroffOutlined />
        </div>
      )}
    </div>
  );
};
export default DivLogin;
