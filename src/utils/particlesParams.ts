/*
 * @LastEditors: 七大大
 * @Date: 2020-09-07
 * @LastEditTime: 2020-09-08
 * @FilePath: \myantdd:\products\react_antd_components\src\utils\particlesParams.ts
 * @Description: 背景动画属性
 */
const particlesParams = {
  particles: {
    number: {
      // 粒子的数量
      value: 160,
      density: {
        enable: false,
      },
    },
    line_linked: {
      enable: false,
    },
    // 粒子移动速度
    move: {
      direction: ['top', 'left'],
      speed: 1,
      random: true,
      out_mode: 'out',
    },
    size: {
      value: 1,
      anim: {
        //是否启用粒子速度
        enable: true,
        //  粒子动画频率
        speed: 10,
      },
    },
    opacity: {
      //粒子的透明度
      value: 0.9,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.05,
      },
    },
    color: {
      // 粒子的颜色
      value: ['#fff', '#00f', '#ff0'],
    },
    shape: {
      // 粒子的形状
      type: ['star', 'edge', 'triangle', 'polygon', 'image'],
    },
  },
  interactivity: {
    // events: {
    //   onhover: {
    //     enable: true,
    //     mode: 'bubble',
    //   },
    //   onclick: {
    //     enable: true,
    //     mode: 'repulse',
    //   },
    // },
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        size: 0,
        opacity: 0,
      },
      repulse: {
        distance: 400,
        duration: 4,
      },
    },
  },
  retina_detect: true,
};
export default particlesParams;
