/*
 * @LastEditors: 七大大
 * @Date: 2020-08-18
 * @LastEditTime: 2020-09-02
 * @FilePath: \myantdd:\products\react_antd_components\src\pages\home\index.tsx
 * @Description: 首页
 */
import React from 'react';
import { Row, Col } from 'antd';
import {
  Progress,
  RingProgress,
  TinyColumn,
  TinyArea,
} from '@ant-design/charts';
import styles from './home.module.scss';
import Demo from '../demo';
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
    <div className={styles.container}>
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
      <div className={styles.top}>
        <Demo />
      </div>
      <div className={styles.top}>home3</div>
      <div className={styles.top}>home3</div>
      <div className={styles.top}>home3</div>
      <div className={styles.top}>home3</div>
      <div className={styles.top}>home3</div>
      <div className={styles.bottom}>home4</div>
    </div>
  );
};
export default DivHome;
