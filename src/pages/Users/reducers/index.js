import { INCREASE, DECREASE } from '../../../actionTypes';

const preloadedState = {
  count: 0
};

export default (state = preloadedState, action) => {
  switch(action.type) {
  case INCREASE:
    return { count: state.count + action.payload };
  case DECREASE:
    return { count: state.count - action.payload };
  default:
    return state;
  }
};