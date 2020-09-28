import React from 'react';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { DownOutlined } from '@ant-design/icons';
import styles from '../index.module.scss';

const PageFive: React.FunctionComponent<any> = (props) => {
  return (
    <div
      className={styles.page}
      style={{
        backgroundImage: `url(//bimgs.plmeizi.com/images/bing/2017/TorronsuoSwamp_ZH-CN8711557344_1920x1080.jpg)`,
      }}
    >
      <OverPack playScale={0.5} className={styles.page_two}>
        <QueueAnim type="bottom" key="block" leaveReverse>
          <div key={3}>发现高人气的直播带货播主</div>
          <div key={4}>还原直播间人气和销量数据</div>
          <div key={5}>监控直播正在购买人数</div>
        </QueueAnim>
      </OverPack>
    </div>
  );
};
export default PageFive;
