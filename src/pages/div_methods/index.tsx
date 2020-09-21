import DivVideo from '../video';

/*
 * @LastEditors: 七大大
 * @Date: 2020-09-14
 * @LastEditTime: 2020-09-15
 * @FilePath: \myantdd:\products\react_antd_components\src\pages\div_methods\index.tsx
 * @Description: 方法显示页
 */
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Badge, Button, Input } from 'antd';
import { numberFormat, closeWebPage } from '../../utils/methods';
import CutomCopy from '../../components/CutomCopy';
import styles from './methods.module.scss';
const AutoResponsive = require('autoresponsive-react');
const { TextArea } = Input;

const DivMethods = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  useEffect(() => {
    setContainerWidth(
      document.body.clientWidth || document.documentElement.clientWidth
    );
  }, []);
  const getAutoResponsiveProps = () => {
    return {
      itemMargin: 10,
      containerWidth: containerWidth,
      itemClassName: 'productListItem',
      gridWidth: 20,
      transitionDuration: '.5',
    };
  };
  return (
    // <Row gutter={[16, 24]}>
    //   <Col span={6}>
    //     <Card
    //       bordered={false}
    //       className={styles.methods}
    //       title="复制文本"
    //       extra={<Badge count={1} style={{ backgroundColor: 'transparent' }} />}
    //       actions={[<CutomCopy content="这是复制内容" />]}
    //     >
    //       <TextArea rows={2} placeholder="点击下方,再ctrl+v即可复制" />
    //     </Card>
    //   </Col>
    //   <Col span={6}>
    //     <Card
    //       bordered={false}
    //       className={styles.methods}
    //       title="数字排序"
    //       extra={<Badge count={2} style={{ backgroundColor: 'transparent' }} />}
    //       actions={[<div>运行</div>]}
    //     >
    //       <div>{numberFormat(Math.floor(Math.random() * 9999999999999))}</div>
    //     </Card>
    //   </Col>
    //   <Col span={6}>
    //     <Card
    //       bordered={false}
    //       className={styles.methods}
    //       title="关闭当前页面"
    //       extra={<Badge count={3} style={{ backgroundColor: 'transparent' }} />}
    //       actions={[<div onClick={() => closeWebPage()}>运行</div>]}
    //     ></Card>
    //   </Col>
    // </Row>

    <AutoResponsive {...getAutoResponsiveProps()}>
      {[
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        1,
        7,
        2,
        3,
        3,
        4,
        2,
        4,
        3,
        4,
        3,
        4,
        3,
        2,
        43,
        4,
        3,
        4,
        433,
        434,
        3,
        45,
        4,
        345,
        34,
        3,
        45,
        4,
      ].map((item, index) => {
        // const { height, width, path } = item._350;
        // let heights = item.cmtStar > 0 || item.cmtCount > 0 ? 124 : 88;
        return (
          <div
            key={index}
            style={{ width: 286, height: 200 }}
            className={`productListItem pr ${styles.methods}`}
          >
            <div>890</div>
            {/* <Card
              bordered={false}
              className={styles.methods}
              title="数字排序"
              extra={
                <Badge count={2} style={{ backgroundColor: 'transparent' }} />
              }
              actions={[<div>运行</div>]}
            >
              <div>
                {numberFormat(Math.floor(Math.random() * 9999999999999))}
              </div>
            </Card> */}
          </div>
        );
      })}
    </AutoResponsive>
  );
};
export default DivMethods;
