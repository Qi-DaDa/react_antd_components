// 头部导航
import React from 'react';
import TweenOne from 'rc-tween-one';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import styles from '../index.module.scss';

const TitleNav: React.FunctionComponent<any> = (props) => {
  const { replace } = useHistory();
  // 登录
  const onLogin = () => {
    replace({ pathname: '/login' });
  };
  return (
    <TweenOne
      animation={{ opacity: 0, y: -50, type: 'from', duration: 500 }}
      className={styles.title}
    >
      <TweenOne
        className={styles.left}
        animation={{
          x: -300,
          type: 'from',
          duration: 1000,
        }}
      >
        <div className={styles.logo}>DIV</div>
      </TweenOne>
      <TweenOne
        animation={{
          x: 300,
          type: 'from',
          duration: 1000,
        }}
        className={styles.right}
        key={1}
      >
        <button onClick={onLogin}>注册/登录</button>
      </TweenOne>
    </TweenOne>
  );
};
export default TitleNav;
