import React from 'react';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { DownOutlined } from '@ant-design/icons';
import styles from '../index.module.scss';

const PageTwo: React.FunctionComponent<any> = (props) => {
  return (
    <div
      className={styles.page}
      style={{
        backgroundImage: `url(//bimgs.plmeizi.com/images/bing/2020/OHR.FraserRiver_ZH-CN1625992097_1920x1080.jpg)`,
      }}
    >
      <OverPack playScale={0.5} className={styles.page_two}>
        <QueueAnim
          key="text"
          type="left"
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
        >
          <img
            src={require('../../../assets/images/index_two.png')}
            width="60%"
            alt="img"
            key="img"
          />
        </QueueAnim>
        <QueueAnim
          key="text"
          type="right"
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
        >
          <h2 key={'title'}>短视频爆款电商数据</h2>
          <h3 key={3}>
            挖掘短视频热卖商品及带货账号，实现精准选人、投放效果最大化
          </h3>
          <div key={3}>分析商品销量数据</div>
          <div key={4}>发现热门带货视频</div>
          <div key={5}>挖掘优质带货达人</div>
        </QueueAnim>
      </OverPack>
    </div>
  );
};
export default PageTwo;
