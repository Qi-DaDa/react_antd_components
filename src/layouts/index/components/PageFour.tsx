import React from 'react';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { DownOutlined } from '@ant-design/icons';
import styles from '../index.module.scss';

const PageFour: React.FunctionComponent<any> = (props) => {
  return (
    <div
      className={styles.page}
      style={{
        backgroundImage: `url(//bimgs.plmeizi.com/images/bing/2016/TransylvaniaMist_ZH-CN11749467591_1920x1080.jpg)`,
      }}
    >
      <OverPack playScale={0.5} className={styles.page_four}>
        <QueueAnim
          key="text"
          type="right"
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
        >
          <h2 key={'title'}>一代人</h2>
          <h3 key={2}>顾城</h3>
          <div key={3}>黑夜人了我黑色的眼睛，</div>
          <div key={4}>我却用它寻找光明。</div>
        </QueueAnim>
      </OverPack>
    </div>
  );
};
export default PageFour;
