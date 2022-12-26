/*
 * @LastEditors: 七大大
 * @Date: 2020-08-18
 * @LastEditTime: 2021-01-20
 * @FilePath: \antd_prod:\products\react_antd_components\src\pages\home\index.tsx
 * @Description: 首页
 */
import React, { useState, useEffect } from 'react';
import { Row, Col, Typography } from 'antd';
import {
  Progress,
  RingProgress,
  TinyColumn,
  TinyArea,
} from '@ant-design/charts';
import ReactEcharts from 'echarts-for-react';
import { Carousel } from 'antd';
import { OverPack, Parallax } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import { GET_BING_API } from '../../services/api';
import styles from './home.module.scss';
import { echartOption } from '../../utils/echarts';

const randomData = (num: number, max: number, min: number) => {
  const data = [];
  for (let i = 0; i < num; i++) {
    data.push({ index: String(i), value: min + Math.random() * (max - min) });
  }
  return data;
};
const DivHome = () => {
  const [carouselList, setCarouselList] = useState([]); // 轮播图数据

  useEffect(() => {
    getBingApi();
    (document.getElementById('root') || window).addEventListener(
      'scroll',
      listenerScroll
    );
  }, []);

  // 滚动监听
  const listenerScroll = () => {
    let clientHeight = document.documentElement.clientHeight; // 可视区域高度
    let scrollTop = document.documentElement.scrollTop; // 滚动条滚动高度
    let scrollHeight = document.documentElement.scrollHeight; // 滚动内容高度
    console.log('可视区域高度=>', clientHeight);
    console.log('滚动内容高度=>', scrollHeight);
    console.log('滚动条滚动高度=>', scrollTop);
  };

  // 获取必应七图
  const getBingApi = async () => {
    const resData = await GET_BING_API();
    setCarouselList(resData.data);
  };

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
      {/*  <OverPack className={styles.container} style={{ overflow: 'hidden' }}> */}
      <div className={styles.top}>
        <Carousel autoplay>
          {carouselList.map((item, key) => (
            <div className={styles.carousel} key={key}>
              <div
                className={styles.single}
                style={{ backgroundImage: `url(${item})` }}
              ></div>
            </div>
          ))}
        </Carousel>
      </div>
      <Row gutter={16}>
        <Col span={6}>
          {/* <Progress {...progressConfig} className={styles.generalize} /> */}
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
      {/* <QueueAnim type="bottom" key="queue"> */}
      <div className={styles.top} key="home1">
        home1
      </div>
      <div className={styles.top} key="home2">
        <div className={styles.bullet_box}>
          {['111', '2222', '3333', '4444', '5555'].map((item, key) => (
            <div key={key}>
              <span
                className={styles.bullet}
                style={{ animationDelay: `${Math.ceil(Math.random() * 10)}s` }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.top} key="home3">
        home3
      </div>
      <div className={styles.top} key="home4">
        home4
      </div>
      <div className={styles.top} key="home5">
        <ReactEcharts
          option={{
            xAxis: echartOption.xAxis,
            yAxis: echartOption.yAxis,
            series: echartOption.barSeries,
          }}
        />
      </div>
      <div className={styles.bottom} key="home6">
        <ReactEcharts
          style={{ height: '100%' }}
          option={{
            color: echartOption.color,
            grid: echartOption.grid,
            xAxis: echartOption.xAxis,
            yAxis: echartOption.yAxis,
            series: echartOption.lineSeries,
          }}
        />
      </div>
      {/* </QueueAnim> */}
      {/* </OverPack> */}
    </div>
  );
};
export default DivHome;
