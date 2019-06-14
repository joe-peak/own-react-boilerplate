import '@babel/polyfill';
import _ from 'lodash';
import imgSrc from './images/test_img.png';
import './styles/index.scss';
import './font/scss/font-awesome.scss';

const component = () => {
  const oDiv = document.createElement('div');
  const oImg = new Image();
  oDiv.innerHTML = _.join(['webpack', 'boilerplate', '@@@'], ' ');
  oDiv.classList.add('boilerplate');
  oImg.src = imgSrc;
  oDiv.appendChild(oImg);
  return oDiv;
};

const set = new Set([[1, 2, 3, 4]]);

console.log(set.values());

for(let i of [1, 2, 3, 4]) {
  console.log(i);
}

const g = function *() {
  const a = yield 2;
  yield 3;
};

const g0 = g();

g0.next();

const { a, ...rest } = { a: 'Joe', b: 'front engineer'};

console.log(a, rest);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  testMethod = () => {
    console.log('hahahah');
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

const point = new Point();

document.querySelector('#wrapper').appendChild(component());