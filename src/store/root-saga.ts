import { all, takeLatest } from 'redux-saga/effects';
import { fetchHitsWorker } from './hit/sagas';
import { fetchHits } from './hit/actions';

export default function* rootSaga() {
  yield all([
    takeLatest(fetchHits.type, fetchHitsWorker),
  ]);
}
