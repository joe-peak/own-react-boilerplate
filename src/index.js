import '@babel/polyfill';
import React, { PureComponent, Fragment } from 'react';
import ReactDom from 'react-dom';
import Demo from '@components/Demo';
import '@fonts/scss/font-awesome.scss';

const getComponentAsync = () => import(/* webpackChunkName:"lodash" */ 'lodash');

class App extends PureComponent {
  state = {
    greeting: '',
  }

  componentDidMount() {
    getComponentAsync().then(_ => {
      this.setState({
        greeting: _.join(['Webpack', 'Boilerplate'], ' ')
      });
    });
  }

  render() {
    const { greeting } = this.state;
    return (
      <Fragment>
        <i className="fa fa-camera-retro fa-5x"></i>
        <div>Hello React ...{ greeting } {_join(['Joe', 'Dennis'], ' ')}</div>
        <Demo />
      </Fragment>
    );
  }
}

module.hot &&
module.hot.accept(App, () => {
  console.log('....');
});

ReactDom.render(<App />, document.querySelector("#app"));