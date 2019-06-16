import '@babel/polyfill';
import React from 'react';
import ReactDom from 'react-dom';
// import Demo from '@components/Demo';
import App from './routes';
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

module.hot &&
module.hot.accept(App, () => {
  /* eslint-disable-next-line */
  console.log('....');
});

ReactDom.render(<App />, document.querySelector('#app'));