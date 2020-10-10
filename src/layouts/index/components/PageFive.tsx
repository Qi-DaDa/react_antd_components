import React from 'react';
import { Button, Divider } from 'antd';
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
      <OverPack playScale={0.5}>
        <QueueAnim
          type="bottom"
          key="block"
          leaveReverse
          className={styles.page_five}
        >
          <h2 key={'title'}>回答</h2>
          <h3 key={2}>北岛</h3>
          <div key={3}>
            卑鄙是卑鄙者的通行证， 高尚是高尚者的墓志铭，
            看吧，在那镀金的天空中，飘满了死者弯曲的倒影。
          </div>
          <div key={4}>冰川纪过去了， 为什么到处都是冰凌？</div>
          <div key={5}>好望角发现了， 为什么死海里千帆相竞？</div>
          <div key={6}>
            我来到这个世界上， 只带着纸、绳索和身影， 为了在审判之前，
            宣读那些被判决的声音。
          </div>
          <div key={7}>告诉你吧，世界 我--不--相--信！ </div>
          <div key={8}>
            纵使你脚下有一千名挑战者， 那就把我算作第一千零一名。
          </div>
          <div key={9}>
            我不相信天是蓝的， 我不相信雷的回声，我不相信梦是假的，
            我不相信死无报应。
          </div>
          <div key={10}>
            如果海洋注定要决堤， 就让所有的苦水都注入我心中，
            如果陆地注定要上升， 就让人类重新选择生存的峰顶。
          </div>
          <div key={11}>新的转机和闪闪星斗， 正在缀满没有遮拦的天空。</div>
          <div key={11}>那是五千年的象形文字， 那是未来人们凝视的眼睛</div>
        </QueueAnim>
      </OverPack>
    </div>
  );
};
export default PageFive;
