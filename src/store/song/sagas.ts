import { call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { searchSongsByArtist, setSongs } from './actions';
import * as api from '../../api';
import { SongResponse } from '../../models/song';

export function* searchSongsByArtistWorker({ payload }: ReturnType<typeof searchSongsByArtist>) {
  try {
    const response: AxiosResponse<{response: SongResponse}> = yield call(api.searchSongsByArtist, payload);
    yield put(setSongs(response.data.response.songs));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.info(e);
  }
}
