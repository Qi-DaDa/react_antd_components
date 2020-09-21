/*
 * @LastEditors: 七大大
 * @Date: 2020-09-11
 * @LastEditTime: 2020-09-14
 * @FilePath: \myantdd:\products\react_antd_components\src\pages\video\index.tsx
 * @Description: 视频页面
 */
import React, { useRef, useEffect, useState } from 'react';
import ComVideo from './components/video';
import styles from './video.module.scss';

const DivVideo = () => {
  const [bulletList, setBulletList] = useState<string[]>([]);
  const inputEl = useRef<HTMLInputElement | null>(null);

  return (
    <div className={styles.divvideo}>
      <div className={styles.video}>
        <ComVideo />
      </div>
    </div>
  );
};
export default DivVideo;
