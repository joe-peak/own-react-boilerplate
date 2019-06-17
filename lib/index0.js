"use strict";

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _lodash = _interopRequireDefault(require("lodash"));

var _test_img = _interopRequireDefault(require("./images/test_img.png"));

require("./styles/index.scss");

require("./font/scss/font-awesome.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const component = () => {
  const oDiv = document.createElement('div');
  const oImg = new Image();
  oDiv.innerHTML = _lodash.default.join(['webpack', 'boilerplate', '@@@'], ' ');
  oDiv.classList.add('boilerplate');
  oImg.src = _test_img.default;
  oDiv.appendChild(oImg);
  return oDiv;
};

const set = new Set([[1, 2, 3, 4]]);
console.log(set.values());

for (let i of [1, 2, 3, 4]) {
  console.log(i);
}

const g = function* g() {
  const a = yield 2;
  yield 3;
};

const g0 = g();
g0.next();

const _a$b = {
  a: 'Joe',
  b: 'front engineer'
},
      {
  a
} = _a$b,
      rest = _objectWithoutProperties(_a$b, ["a"]);

console.log(a, rest);

class Point {
  constructor(x, y) {
    _defineProperty(this, "testMethod", () => {
      console.log('hahahah');
    });

    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

}

const point = new Point();
document.querySelector('#wrapper').appendChild(component());