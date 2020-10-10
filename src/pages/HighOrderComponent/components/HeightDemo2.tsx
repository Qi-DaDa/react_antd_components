import React from 'react';
const HeightDemo = (props: any) => {
  console.log('DEMO2', props);
  const { num } = props;
  return (
    <div>
      <div>demo2-{num}</div>
    </div>
  );
};
export default HeightDemo;
