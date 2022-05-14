import { createWrapper } from 'next-redux-wrapper';

import { Action, applyMiddleware, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { StateType } from 'typesafe-actions';

import { rootReducer } from './ducks/rootReducer';
import { rootSaga } from './ducks/rootSaga';
import { ISagaStore } from './types';

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state: StateType<any>, action: Action) => rootReducer(state, action);

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, bindMiddleware([sagaMiddleware]));

  (store as ISagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore);
