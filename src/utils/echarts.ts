export const echartOption = {
  // 颜色
  color: ['#13c2c2', '#EB8793', '#B3564A', '#E64765', '#57A1F8', '#67C8CA'],
  // 位置
  grid: {
    top: 40,
    bottom: 40,
    left: 100,
    right: 40,
  },
  yAxis: {
    type: 'value',
    splitLine: {
      lineStyle: {
        type: 'dashed', // 虚线
        color: '#D8D8D8', // 线的颜色
      },
    },
    axisLine: {
      show: false, //竖线
    },
    axisTick: {
      show: false, //竖线间隔
    },
    axisLabel: {
      margin: 10, // 数标距虚线的距离
      color: '#D8D8D8', //数标的颜色
      formatter: (val: number) => val.toFixed(2), //控制数标
    },
    scale: true, // 是否从0开始
    // splitNumber: 2,Y轴数标间距
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  lineSeries: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
    },
  ],
  barSeries: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(220, 220, 220, 0.8)',
      },
    },
  ],
};
