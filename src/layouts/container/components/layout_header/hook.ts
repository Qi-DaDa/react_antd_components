import { useState, useEffect } from 'react';
import { GET_BABSOUP_API } from '../../../../services/api';
const useHeader = (props: any) => {
  const [badsoup, setbadsoup] = useState(''); // 毒鸡汤
  useEffect(() => {
    getBadsoupApi();
    // setInterval(() => {
    //   getBadsoupApi();
    // }, 30000);
  }, []);
  // 获取毒鸡汤
  const getBadsoupApi = async () => {
    const resData: any = await GET_BABSOUP_API();
    if (resData?.status === 1) {
      setbadsoup(resData.txt || '鸡汤在紧急配送中···');
    }
  };
  return { badsoup, getBadsoupApi };
};
export default useHeader;
