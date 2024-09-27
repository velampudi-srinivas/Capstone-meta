import React from 'react';
import Main from './Main'; 

const TestWrapper = React.forwardRef((props, ref) => {
  return <Main ref={ref} />;
});

export default TestWrapper;
