/*
 * @LastEditors: 七大大
 * @Date: 2020-09-09
 * @LastEditTime: 2020-09-14
 * @FilePath: \myantdd:\products\react_antd_components\src\components\CutomCopy\index.tsx
 * @Description: 复制文本组件
 */
import React, { useRef, useEffect } from 'react';
import { message } from 'antd';
import ReactDOM from 'react-dom';
interface Props {
  content: string; // 所要哦复制的文本
  title?: string; //显示文本
}

const CutomCopy: React.FunctionComponent<Props> = (props) => {
  const { content, title } = props;
  const domRef = useRef<HTMLInputElement | null>(null);
  const copyTranslateResult = (info: any) => {
    const copyDOM = domRef.current;
    if (copyDOM && copyDOM.innerHTML !== '') {
      let range = document.createRange(); //创建一个range
      let selObj = window.getSelection();
      selObj && selObj.removeAllRanges(); //清楚页面中已有的selection
      range.selectNode(copyDOM); // 选中需要复制的节点
      selObj && selObj.addRange(range); // 执行选中元素
      var successful = document.execCommand('copy'); // 执行 copy 操作
      console.log(selObj, successful);
      if (successful) {
        message.success('复制成功！');
      } else {
        message.warning('复制失败，请手动复制！');
      }
      // 移除选中的元素
      selObj && selObj.removeAllRanges();
    } else {
      message.warning('没有内容');
    }
  };
  return (
    <div
      style={{ width: '100%', height: '100%' }}
      onClick={copyTranslateResult}
    >
      <div ref={domRef}>{content}</div>
    </div>
  );
};
export default CutomCopy;
