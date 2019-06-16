import React, { PureComponent } from 'react';

class Demo extends PureComponent {
  doClick = () => {}

  render() {
    return <button onClick={this.doClick}>Click Me!</button>;
  }
}

export default Demo;
