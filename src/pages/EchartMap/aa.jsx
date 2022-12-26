// 流量大屏
import React from 'react'
import ReactEcharts from 'echarts-for-react';
import 'echarts/map/js/china';

const data = [
  { name: "北京", value: 199 },
  { name: "天津", value: 42 },
  { name: "河北", value: 102 },
  { name: "山西", value: 81 },
  { name: "内蒙古", value: 47 },
  { name: "辽宁", value: 67 },
  { name: "吉林", value: 82 },
  { name: "黑龙江", value: 123 },
  { name: "上海", value: 24 },
  { name: "江苏", value: 92 },
  { name: "浙江", value: 114 },
  { name: "安徽", value: 109 },
  { name: "福建", value: 116 },
  { name: "江西", value: 91 },
  { name: "山东", value: 119 },
  { name: "河南", value: 137 },
  { name: "湖北", value: 116 },
  { name: "湖南", value: 114 },
  { name: "重庆", value: 91 },
  { name: "四川", value: 125 },
  { name: "贵州", value: 62 },
  { name: "云南", value: 83 },
  { name: "西藏", value: 9 },
  { name: "陕西", value: 80 },
  { name: "甘肃", value: 56 },
  { name: "青海", value: 10 },
  { name: "宁夏", value: 18 },
  { name: "新疆", value: 180 },
  { name: "广东", value: 123 },
  { name: "广西", value: 59 },
  { name: "海南", value: 14 },
  { name: "台湾", value: 99 },
  { name: "香港", value: 99 },
  { name: "澳门", value: 99 },
  { name: "南海诸岛", value: 999 },
];

const FluxRealtime = () => {
  let geoCoordMap = {};
  const convertData = (data) => {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value),
        });
      }
    }
    return res;
  };

  return (
    <div>
      <ReactEcharts
        style={{ width: '100%', height: '90vh' }}
        option={{
          geo: {
            show: true,
            roam: true,
            map: 'china',
            label: {
              emphasis: {
                show: true,
                color: 'yellow'
              }
            },
            itemStyle: {
              normal: {
                areaColor: 'transparent',
                borderColor: '#9545E6',
              },
              emphasis: {
                areaColor: '#ff143b',// 触摸颜色
              }
            }
          },

          series: [{
            name: 'chinaMapOutline',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
          }],
        }}
      >

      </ReactEcharts>

    </div>
  )
}
export default FluxRealtime