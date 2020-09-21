/*
 * @LastEditors: 七大大
 * @Date: 2020-09-11
 * @LastEditTime: 2020-09-14
 * @FilePath: \myantdd:\products\react_antd_components\src\utils\methods.ts
 * @Description: 方法收集
 */

/**
 * @description: 关闭浏览器窗口
 */
export const closeWebPage = () => {
  if (navigator.userAgent.indexOf('MSIE') > 0) {
    // IE
    if (navigator.userAgent.indexOf('MSIE 6.0') > 0) {
      // IE6
      window.opener = null;
      window.close();
    } else {
      // IE6+
      window.open('', '_top');
      window.top.close();
    }
  } else if (
    navigator.userAgent.indexOf('Firefox') > 0 ||
    navigator.userAgent.indexOf('Presto') > 0
  ) {
    // FF和Opera
    window.location.href = 'about:blank';
    window.close(); // 火狐默认状态非window.open的页面window.close是无效的
  } else {
    window.opener = null;
    window.open('', '_self', '');
    window.close();
  }
};
/**
 * @description: 数字转换
 * @param {type}
 * @return {type}
 */
// 数字转换
export const numberFormat = (value: number | null) => {
  if (value) {
    let param = {};
    let k = 10000,
      sizes = ['', '万', '亿', '万亿'],
      i;
    if (value < -k) {
      i = Math.floor(Math.log(value) / Math.log(k));
      var cc = Number(-value);
      let aa = `-${(cc / Math.pow(k, i)).toFixed(2)}${sizes[i]}`;
      return aa;
    } else if (value > k) {
      i = Math.floor(Math.log(value) / Math.log(k));
      let aa = `${(value / Math.pow(k, i)).toFixed(2)}${sizes[i]}`;
      return aa;
    } else {
      return value;
    }
  } else {
    return '--';
  }
};
