import {combineReducers, createStore, applyMiddleware} from 'redux';
import {productReducer} from './product/reducers';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  product: productReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
export default function configureStore() {
  const middlewares = [createLogger({}), thunk];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(rootReducer, middleWareEnhancer);
  return store;
}
