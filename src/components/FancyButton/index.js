import React from 'react';

/* eslint-disable-next-line */
const FancyButton = React.forwardRef(({ children }, ref) => {
  return <button ref={ref}>{ children }</button>;
});

export default FancyButton;

