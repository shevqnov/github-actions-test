import { call, put } from 'redux-saga/effects';
import { searchSongsByArtist, setSongs } from './actions';
import * as api from '../../api';

export function* searchSongsByArtistWorker({ payload }: ReturnType<typeof searchSongsByArtist>) {
  try {
    const response = yield call(api.searchSongsByArtist, payload);
    yield put(setSongs(response.data.response.songs));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.info(e);
  }
}
