/*
 * @LastEditors: 七大大
 * @Date: 2020-09-07
 * @LastEditTime: 2020-10-26
 * @FilePath: \myantdd:\products\react_antd_components\src\pages\mine\index.jsx
 * @Description: 个人中心页面
 */
import React from 'react'
//引入依赖
import videojs from 'video.js'
import 'videojs-flash'
import 'video.js/dist/video-js.css'
const url = [
  {
    url: "rtmp://58.200.131.2:1935/livetv/hunantv",
    name: "湖南卫视"
  },
  {
    url: "https://pull-flv-l1.douyincdn.com/stage/stream-684081629639475230_or4.flv",
    name: "直播-C姐豪横"
  },
  {
    url: "https://ip4060406906.mobgslb.tbcache.com/pull-f3.douyincdn.com/stagereplay/stream-395852085640036818.flv?ali_redirect_ex_hot=111",
    name: "直播-月老板"
  },
  {
    url: "http://pull-f5.flive.douyincdn.com/gamereplay/stream-107622467615326676/index.flv",
    name: "灰豚-C姐豪横"
  },
  {
    url: " http://pull-f5.flive.douyincdn.com/gamereplay/stream-107622467615326676/index.m3u8",
    name: "灰豚-月老板"
  },
]
class DivMine extends React.Component {
  state = {
    nowPlay: ""
  }
  //组件挂载完成之后初始化播放控件
  componentDidMount () {
    const videoJsOptions = {
      autoplay: true,//自动播放
      controls: true,
      sources: [{
        src: 'rtmp://58.200.131.2:1935/livetv/hunantv',
        type: 'rtmp/flv'
      }]
    }
    this.player = videojs('my-video', videoJsOptions, function onPlayerReady () { //(id或者refs获取节点，options，回调函数)
      videojs.log('Your player is ready!');
      // In this context, `this` is the player that was created by Video.js.
      this.play();
      // How about an event listener?
      this.on('ended', function () {
        videojs.log('Awww...over so soon?!');
      });
    });
  }

  handleClick (item) {
    this.setState({
      nowPlay: item.name
    })
    this.player.pause();
    this.player.src(item.url);
    this.player.load();
    this.player.play();
  }
  render () {
    return (
      <div>
        <div>
          <ul style={{ listStyleType: "decimal-leading-zero", float: "left" }}>
            {
              url.map((item, index) => {
                return <li style={{ height: 60 }} key={item.name} onClick={() => this.handleClick(item)}>
                  <span>{item.name}</span>
                </li>
              })
            }
          </ul>
          <video style={{ width: "50vw", height: "50vh", margin: "0 auto", border: '1px solid red' }} id="my-video" className="video-js vjs-default-skin">
          </video>
        </div>
      </div>
    )
  }
}

export default DivMine;
