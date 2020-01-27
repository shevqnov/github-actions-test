import { call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { setHits, setError, fetchHits } from './actions';
import { searchHits } from '../../api';
import { HitsResponse } from '../../models/hit';

export function* fetchHitsWorker({ payload }: ReturnType<typeof fetchHits>) {
  try {
    const response: AxiosResponse<{response: HitsResponse}> = yield call(searchHits, payload);
    yield put(setHits(response.data.response.hits));
  } catch (e) {
    yield put(setError('someError'));
  }
}
