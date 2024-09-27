import { all } from 'redux-saga/effects';
import beetSaga from './beet.saga.js'

export default function* rootSaga() {
    yield all([
     beetSaga(),
    ]);
  }