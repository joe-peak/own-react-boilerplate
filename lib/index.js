"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Demo = _interopRequireDefault(require("@components/Demo"));

require("@fonts/scss/font-awesome.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getComponentAsync = () => new Promise(resolve => {
  require.ensure([], require => {
    resolve(require(
    /* webpackChunkName:"lodash" */
    'lodash'));
  });
});

class App extends _react.PureComponent {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      greeting: ''
    });
  }

  componentDidMount() {
    getComponentAsync().then(_ => {
      this.setState({
        greeting: _.join(['Webpack', 'Boilerplate'], ' ')
      });
    });
  }

  render() {
    const {
      greeting
    } = this.state;
    return _react.default.createElement(_react.Fragment, null, _react.default.createElement("i", {
      className: "fa fa-camera-retro fa-5x"
    }), _react.default.createElement("div", null, "Hello React ...", greeting, " ", _join(['Joe', 'Dennis'], ' ')), _react.default.createElement(_Demo.default, null));
  }

}

module.hot && module.hot.accept(App, () => {
  console.log('....');
});

_reactDom.default.render(_react.default.createElement(App, null), document.querySelector('#app'));