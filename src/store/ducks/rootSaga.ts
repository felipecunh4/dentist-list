import { all, fork } from 'typed-redux-saga';

export function* rootSaga() {
  return yield* all([]);
}
