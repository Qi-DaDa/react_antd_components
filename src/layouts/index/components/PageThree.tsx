import React from 'react';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { DownOutlined } from '@ant-design/icons';
import styles from '../index.module.scss';

const PageThree: React.FunctionComponent<any> = (props) => {
  return (
    <div
      className={styles.page}
      style={{
        backgroundImage: `url(//bimgs.plmeizi.com/images/bing/2016/Dongjiang_ZH-CN10434068279_1920x1080.jpg)`,
      }}
    >
      <OverPack playScale={0.5} className={styles.page_two}>
        <QueueAnim
          key="text"
          type="left"
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
        >
          <h2 key={'title'}>人气热销直播间分析</h2>
          <h3 key={3}>
            人气热销直播间分析
            快速发现热门直播间，还原播主历史直播热度和销量数据，实现直播流量和电商变现。
          </h3>
          <div key={3}>发现高人气的直播带货播主</div>
          <div key={4}>还原直播间人气和销量数据</div>
          <div key={5}>监控直播正在购买人数</div>
        </QueueAnim>
        <QueueAnim
          key="text"
          type="right"
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
        >
          <img
            src={require('../../../assets/images/index_three.png')}
            width="60%"
            alt="img"
            key="img"
          />
        </QueueAnim>
      </OverPack>
    </div>
  );
};
export default PageThree;
