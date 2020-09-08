import { useState, useEffect } from 'react';
import { POST_TABLE_API } from '../../../../services/api';
const useHeader = (props: any) => {
  console.log(props);

  useEffect(() => {
    getTips();
  }, []);
  const getTips = async () => {
    const resData = await POST_TABLE_API();
    console.log(resData);
  };
  return { aa: '123' };
};
export default useHeader;
