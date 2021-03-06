import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer, { InitSideState } from './reducer';

export interface RootStoreState {
  site: InitSideState;
}

export function configureStore() {
  const middlewares = [thunk, logger];
  const enhancer = applyMiddleware(...middlewares);
  const store = createStore(rootReducer, enhancer);
  return store;
}
