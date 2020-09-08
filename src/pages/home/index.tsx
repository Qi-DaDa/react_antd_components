/*
 * @LastEditors: 七大大
 * @Date: 2020-08-18
 * @LastEditTime: 2020-09-08
 * @FilePath: \myantdd:\products\react_antd_components\src\pages\home\index.tsx
 * @Description: 首页
 */
import React from 'react';
import { Row, Col, Typography } from 'antd';
import {
  Progress,
  RingProgress,
  TinyColumn,
  TinyArea,
} from '@ant-design/charts';
import Demo from '../demo';
import { OverPack, Parallax } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import styles from './home.module.scss';

const randomData = (num: number, max: number, min: number) => {
  const data = [];
  for (let i = 0; i < num; i++) {
    data.push({ index: String(i), value: min + Math.random() * (max - min) });
  }
  return data;
};
const DivHome = () => {
  const progressConfig = {
    width: 100,
    height: 160,
    percent: 0.3,
    color: ['#F4664A', '#E8EDF3'],
  };
  const ringProgressConfig = {
    width: 100,
    height: 160,
    percent: 0.8,
    color: ['#30BF78', '#E8EDF3'],
  };
  const tinyColumnConfig = {
    width: 200,
    height: 160,
    data: randomData(50, 10, 1000),
    xField: 'index',
    yField: 'value',
    guideLine: [
      {
        type: 'median',
        text: {
          position: 'start',
          content: '中位数',
          style: {
            stroke: 'white',
            lineWidth: 2,
          },
        },
      },
    ],
  };
  const tinyAreaConfig = {
    width: 200,
    height: 160,
    data: randomData(50, 10, 1000),
    xField: 'index',
    yField: 'value',
    guideLine: [
      {
        type: 'mean',
        text: {
          position: 'start',
          content: '平均值',
          style: {
            stroke: 'white',
            lineWidth: 2,
          },
        },
      },
    ],
  };
  return (
    // <div className={styles.container}>
    <OverPack className={styles.container} style={{ overflow: 'hidden' }}>
      <div className={styles.top}>
        <Demo />
      </div>
      <Row gutter={16}>
        <Col span={6}>
          <Progress {...progressConfig} className={styles.generalize} />
        </Col>
        <Col span={6}>
          <RingProgress {...ringProgressConfig} className={styles.generalize} />
        </Col>
        <Col span={6}>
          <TinyColumn {...tinyColumnConfig} className={styles.generalize} />
        </Col>
        <Col span={6}>
          <TinyArea {...tinyAreaConfig} className={styles.generalize} />
        </Col>
      </Row>
      <QueueAnim type="bottom" key="queue">
        <div className={styles.top} key="home1">
          home1
        </div>
        <div className={styles.top} key="home2">
          home2
        </div>
        <div className={styles.top} key="home3">
          home3
        </div>
        <div className={styles.top} key="home4">
          home4
        </div>
        <div className={styles.top} key="home5">
          home5
        </div>
        <div className={styles.bottom} key="home6">
          home6
        </div>
      </QueueAnim>
    </OverPack>
    //  </div>
  );
};
export default DivHome;
