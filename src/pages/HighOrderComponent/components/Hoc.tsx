import React, { useState, useRef } from 'react';
const Hoc = (InnerComponent: any) => {
  const [num, setNum] = useState(0);
  return (props: any) => {
    console.log('HOC', props);
    // const aref = useRef(null);
    // console.log(aref);

    return (
      <InnerComponent
        {...props}
        props1="333"
        num={num}
        onUpdata={() => setNum(num + 1)}
      />
    );
  };
};
export default Hoc;
