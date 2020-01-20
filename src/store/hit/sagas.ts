import { call, put } from 'redux-saga/effects';
import { setHits, setError, fetchHits } from './actions';
import { searchHits } from '../../api';

export function* fetchHitsWorker({ payload }: ReturnType<typeof fetchHits>) {
  try {
    const response = yield call(searchHits, payload);
    yield put(setHits(response.data.response.hits));
  } catch (e) {
    yield put(setError('someError'));
  }
}
