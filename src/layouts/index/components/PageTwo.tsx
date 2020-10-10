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
        backgroundImage: `url(https://cn.bing.com/th?id=OHR.FraserRiver_ZH-CN1625992097_1920x1080.jpg)`,
      }}
    >
      <OverPack playScale={0.5} className={styles.page_two}>
        <QueueAnim
          key="text"
          type="bottom"
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
          style={{ height: 300 }}
        >
          <h2 key={'title'}>水调歌头·明月几时有</h2>
          <h3 key={2}>苏轼 </h3>
          <div key={3}>丙辰中秋，欢饮达旦，大醉，作此篇。兼怀子由。</div>
          <div key={4}>明月几时有，把酒问青天。</div>
          <div key={5}>不知天上宫阙，今夕是何年？</div>
          <div key={6}>我欲乘风归去，又恐琼楼玉宇，高处不胜寒。</div>
          <div key={7}>起舞弄清影，何似在人间！</div>
          <div key={8}>转朱阁，低绮户，照无眠。</div>
          <div key={9}>不应有恨，何事长向别时圆？</div>
          <div key={10}>人有悲欢离合，月有阴晴圆缺，此事古难全。</div>
          <div key={11}>但愿人长久，千里共婵娟。</div>
        </QueueAnim>

        <QueueAnim
          key="img"
          type="right"
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
        >
          <img
            src={require('../../../assets/images/index_two.jpg')}
            alt="img"
            height={300}
            key="img"
          />
        </QueueAnim>
      </OverPack>
    </div>
  );
};
export default PageTwo;
