import React, { useEffect, useState } from 'react';
import BulletScreen, { StyledBullet } from 'rc-bullets';
import styles from '../video.module.scss';
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  VolumeMenuButton,
} from 'video-react';
import 'video-react/dist/video-react.css';
const headUrl =
  'https://zerosoul.github.io/rc-bullets/assets/img/heads/girl.jpg';
const ComVideo = () => {
  // 弹幕屏幕
  const [screen, setScreen] = useState(null);
  // 弹幕内容
  const [bullet, setBullet] = useState('');
  useEffect(() => {
    // 给页面中某个元素初始化弹幕屏幕，一般为一个大区块。此处的配置项全局生效
    let s = new BulletScreen('.videoBullet', { duration: 20 });
    setScreen(s);
  }, []);
  // 弹幕内容输入事件处理
  const handleChange = ({ target: { value } }) => {
    setBullet(value);
  };
  // 发送弹幕
  const handleSend = () => {
    if (bullet) {
      screen.push(
        <StyledBullet
          head={headUrl}
          msg={bullet}
          size="small"
          color={`#${Math.floor(Math.random() * (2 << 23)).toString(16)}`}
          backgroundColor={`#${Math.floor(Math.random() * (2 << 23)).toString(
            16
          )}`}
        />
      );
      setBullet('');
    }
  };
  return (
    <>
      <Player
        className="videoBullet"
        playsInline
        // autoPlay // 自动播放
        fluid={false} // 它始终是100%宽的，通过视频的比率来计算高度
        poster={require('../../../assets/images/logo.jpg')} // 封面
        width={'100%'}
        height={'100%'}
        controls="controls"
      >
        <source
          src={require('../../../assets/images/trailer_hd.mp4')}
          type="video/mp4"
        />
        <ControlBar autoHide={false} style={{ background: 'red' }}>
          <ReplayControl seconds={10} order={1.1} />
          <ForwardControl seconds={10} order={1.2} />
          <VolumeMenuButton vertical />
        </ControlBar>
      </Player>
      <div className={styles.increased}>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="请输入弹幕"
            value={bullet}
            onChange={handleChange}
          />
          <span className={styles.bottom}></span>
          <span className={styles.right}></span>
          <span className={styles.top}></span>
          <span className={styles.left}></span>
        </div>
        <div className={styles.buttom}>
          <button onClick={handleSend}>发送</button>
        </div>
      </div>
    </>
  );
};
export default ComVideo;
