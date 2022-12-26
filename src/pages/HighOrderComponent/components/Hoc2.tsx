import React, { useState, useRef } from 'react';
const Hoc2 = (InnerComponent: any) => {
  return (props: any) => {
    console.log('HOC', <InnerComponent />);

    return (<InnerComponent />
      // React.createContext(InnerComponent, InnerComponent.props, InnerComponent.childen)
    );
  };
};
export default Hoc2;
