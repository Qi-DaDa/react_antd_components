import React, { useState, useEffect, useRef } from 'react';
const Hoc = (InnerComponent: any) => {
  // const [num, setNum] = useState(0);
  return (props: any) => {
    const { props1, ...ohterProps } = props
    // let aref = useRef(null);
    // console.log(ohterProps, aref);
    const aref = (info: any) => {
      console.log(info);
    }
    console.log(InnerComponent);

    return (
      <div>
        <p>9999</p>
        <InnerComponent
          // {...props}
          // props1="333"
          num={1}
        // onUpdata={() => { setNum(num + 1) }}
        // ref={aref}
        />
      </div>
    );
  };
};
export default Hoc;
