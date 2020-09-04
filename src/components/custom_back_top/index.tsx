/*
 * @LastEditors: 七大大
 * @Date: 2020-08-20
 * @LastEditTime: 2020-09-02
 * @FilePath: \myantdd:\products\react_antd_components\src\components\custom_back_top\index.tsx
 * @Description: 自定义回到顶部组件
 */
import React, { useEffect, useState } from 'react';
import { BackTop } from 'antd';
import styles from './custom_back_top.module.scss';

const CustomBackTop = () => {
  useEffect(() => {
    console.log('监听');
    window.addEventListener('scroll', changeScrollTopShow);
    return () => {
      console.log('销毁监听');
      window.removeEventListener('scroll', changeScrollTopShow);
    };
  }, []);

  const changeScrollTopShow = () => {
    console.log(1234567);
    console.log(document.documentElement.scrollTop || document.body.scrollTop);
    let scrollTop = document.documentElement.scrollTop; // 滚动条滚动高度
    let scrollHeight = document.documentElement.scrollHeight; // 滚动内容高度
    console.log('滚动内容高度=>', scrollHeight);
    console.log('滚动条滚动高度=>', scrollTop);
    console.log(scrollHeight - scrollTop);
  };

  /**
   * @description:回到顶部
   * @param
   */
  const onBackTop = () => {
    console.log(10);
    document.documentElement.scrollTop = 0;
    document.documentElement.scrollIntoView();
  };
  return (
    <div className={styles.back_top} onClick={onBackTop}>
      up
    </div>
  );
};
export default CustomBackTop;
