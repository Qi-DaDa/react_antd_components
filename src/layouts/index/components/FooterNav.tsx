import React from 'react';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { DownOutlined } from '@ant-design/icons';
import styles from '../index.module.scss';

const FooterNav: React.FunctionComponent<any> = (props) => {
  return (
    <div
      className={styles.page}
      style={{
        height: 220,
        backgroundImage: `url(//bimgs.plmeizi.com/images/bing/2016/GoldenHouten_ZH-CN8874322377_1920x1080.jpg)`,

        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <OverPack playScale={0.1}>
        <QueueAnim type="top" key="block" leaveReverse>
          <div key="footer" className={styles.footer_nav}>
            DiV
          </div>
        </QueueAnim>
      </OverPack>
    </div>
  );
};
export default FooterNav;
