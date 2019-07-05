import React, { PureComponent } from 'react';

const LogProps = Wrapper => {
  class LogProps extends PureComponent {
    render() {
      console.log(this.props);
      return <Wrapper {...this.props} ref={this.props.forwardRef} />;
    }
  }
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardRef={ref} />;
  });
};

export default LogProps;
