// import { INCREASE, DECREASE } from '../actionTypes';

// export default (state = {}, action) => {
//   switch(action.type) {
//   case INCREASE:
//     return { count: state.count + action.payload };
//   case DECREASE:
//     return { count: state.count - action.payload };
//   default:
//     return state;
//   }
// };
import users from '../pages/Users/reducers';
import { combineReducers } from 'redux';

export default combineReducers({
  users,
});