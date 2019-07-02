import '@babel/polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
// import Demo from '@components/Demo';
import { PRODUCTION } from './constants';
import App from './routes';
import store from './store';

import '@fonts/scss/font-awesome.scss';
// import 'antd/dist/antd.css';


// const getComponentAsync = () => import(/* webpackChunkName:"lodash" */ 'lodash');
// class App extends PureComponent {
//   state = {
//     greeting: '',
//   }

//   componentDidMount() {
//     getComponentAsync().then(_ => {
//       this.setState({
//         greeting: _.join(['Webpack', 'Boilerplate'], ' ')
//       });
//     });
//   }

//   render() {
//     const { greeting } = this.state;
//     return (
//       <Fragment>
//         <i className="fa fa-camera-retro fa-5x"></i>
//         <div>Hello React ...{ greeting } {_.join(['Joe', 'Dennis'], ' ')}</div>
//         <Demo />
//       </Fragment>
//     );
//   }
// }

const renderApp = () => {
  ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#app')
  );
};

if (process.env.NODE_ENV !== PRODUCTION && module.hot) {
  module.hot.accept(App, renderApp);
}

renderApp();