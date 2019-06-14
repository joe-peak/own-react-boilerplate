import React, { PureComponent } from 'react';

class Demo extends PureComponent {
  doClick = () => {
    alert('Clicked me...');
  }

  render() {
    return <button onClick={this.doClick}>Click Me!</button>;
  }
}

export default Demo;
