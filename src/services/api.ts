import request from './network';
const { GET, POST } = request;
// 必应7图
export const GET_BING_API = () =>
  GET({ url: 'https://api.xygeng.cn/Bing/week/' });
// 毒鸡汤
export const GET_BABSOUP_API = () =>
  GET({ url: 'https://data.zhai78.com/openOneBad.php' });
export const POST_TABLE_API = () =>
  POST({ url: 'https://jsonplaceholder.typicode.com/posts' });

// export const aaaaa = () =>
//   GET({ url: 'https://stream.pangqiu.com/streaming/taobao/279157031876.flv' });
// export const bbbbb = () =>
//   GET({ url: 'https://stream.pangqiu.com/stream/taobao/279157031876' });
