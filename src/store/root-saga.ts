import { all, takeLatest } from 'redux-saga/effects';
import { fetchHitsWorker } from './hit/sagas';
import { fetchHits } from './hit/actions';
import { searchSongsByArtist } from './song/actions';
import { searchSongsByArtistWorker } from './song/sagas';

export default function* rootSaga() {
  yield all([
    takeLatest(fetchHits.type, fetchHitsWorker),
    takeLatest(searchSongsByArtist.type, searchSongsByArtistWorker),
  ]);
}
