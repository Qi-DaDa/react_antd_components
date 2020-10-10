import React from 'react';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { DownOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import styles from '../index.module.scss';

const PageOne: React.FunctionComponent<any> = (props) => {
  const { replace } = useHistory();
  return (
    <div
      className={styles.page}
      style={{
        backgroundImage: `url(${require('../../../assets/images/index_bg1.jpg')})`,
      }}
    >
      <QueueAnim
        key="QueueAnim"
        type={['bottom', 'top']}
        className={styles.page_one}
        duration={1500}
      >
        <div className={styles.logo} key={1}>
          DiV
        </div>
        <div className={styles.publicity} key={2}>
          最专业高端高效牛逼没有之一的领导者
        </div>
        <div key={3}>
          <Button
            ghost
            block
            className={styles.button}
            onClick={() => {
              // replace({ pathname: '/div' });
              window.open('/div');
            }}
          >
            立即使用
          </Button>
        </div>
      </QueueAnim>
      <TweenOne
        animation={{
          y: '-=20',
          yoyo: true,
          repeat: -1,
          duration: 1000,
        }}
        className={styles.arrows}
        key="icon"
      >
        <DownOutlined />
      </TweenOne>
    </div>
  );
};
export default PageOne;
