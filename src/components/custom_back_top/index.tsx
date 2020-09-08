/*
 * @LastEditors: 七大大
 * @Date: 2020-08-20
 * @LastEditTime: 2020-09-07
 * @FilePath: \myantdd:\products\react_antd_components\src\components\custom_back_top\index.tsx
 * @Description: 自定义回到顶部组件
 */
import React, { useEffect, useState } from 'react';
import { BackTop } from 'antd';
import styles from './custom_back_top.module.scss';

interface Props {
  elementById: string; // 元素id
}
const CustomBackTop: React.FunctionComponent<Props> = (props) => {
  const { elementById } = props;
  const [isShow, setIsSShow] = useState(false); // 是否显示按钮
  useEffect(() => {
    (document.getElementById(elementById) || window).addEventListener(
      'scroll',
      changeScrollTopShow
    );
    return () => {
      window.removeEventListener('scroll', changeScrollTopShow);
    };
  }, []);

  const changeScrollTopShow = () => {
    setIsSShow(
      (document.getElementById(elementById) || document.body).scrollTop > 800
    );
  };

  /**
   * @description:回到顶部
   * @param
   */
  const onBackTop = () => {
    (document.getElementById(elementById) || document.body).scrollTop = 0;
    // (document.getElementById(elementById) || document.body).scrollIntoView(
    //   true
    // );
    // (document.getElementById(elementById) || document.body).animate(
    //   { scrollTop: 0 },
    //   500
    // );
  };
  return (
    <div
      className={styles.back_top}
      onClick={onBackTop}
      style={isShow ? { height: 45 } : { height: 0 }}
    >
      up
    </div>
  );
};
export default CustomBackTop;
