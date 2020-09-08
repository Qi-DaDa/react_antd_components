/*
 * @LastEditors: 七大大
 * @Date: 2020-09-08
 * @LastEditTime: 2020-09-08
 * @FilePath: \myantdd:\products\react_antd_components\src\components\CutomLoading\index.tsx
 * @Description: 页面加载中
 */
import React, { useState } from 'react';
import styles from './cutom_loading.module.scss';

const DivLoading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.outer}></div>
      <div className={styles.middle}></div>
      <div className={styles.inner}></div>
    </div>
  );
};
export default DivLoading;
