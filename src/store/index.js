import {
  createStore,
  applyMiddleware,
  // combineReducers,
} from 'redux';
import reduxThunk from 'redux-thunk';
// 集成 devtools 扩展程序
import { composeWithDevTools } from 'redux-devtools-extension';
// Redux Starter Kit 简化创建store的设置
// import { configureStore， getDefaultMiddleware } from 'redux-starter-kit';
import rootReducer from '../reducers';
import { PRODUCTION } from '../constants';

const preloadedState = {
  count: 0
};
const composedEnhancers = composeWithDevTools(applyMiddleware(reduxThunk));
const store = createStore(rootReducer, preloadedState, composedEnhancers);
// const store = configureStore({
//   reducer: rootReducer,
//   preloadedState,
//   middleware: [...getDefaultMiddleware()]
// });

// 热加载
if (process.env.NODE_ENV !== PRODUCTION && module.hot) {
  module.hot.accept('../reducers', () => store.replaceReducer(rootReducer));
}
export default store;
