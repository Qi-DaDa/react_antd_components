import React from 'react';
const HeightDemo = (props: any) => {
  console.log('DEMO1', props);
  const { num, onUpdata } = props;
  return (
    <div>
      <div onClick={onUpdata} style={{ cursor: 'pointer' }}>
        demo1-{num}
      </div>
    </div>
  );
};
export default HeightDemo;
