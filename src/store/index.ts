import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';

import {
  configureStore,
  createAction,
  createReducer,
  PayloadAction,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

export interface State {
  hits: Hit[];
  error: string | null;
  loading: boolean;
}

type HitType = 'song' | 'album' | 'artist'

export interface Hit {
  highlights: [];
  index: string;
  type: HitType;
  result: {
    id: string;
    full_title: string;
    song_art_image_url: string;
  };
  primary_artist: {
    id: string;
  };
}

const initialState: State = {
  hits: [],
  error: null,
  loading: false,
};

export const fetchHits = createAction<string>('fetch hits');
const setHits = createAction<Hit[]>('set hits');
const setError = createAction<string>('set error');

const api = axios.create({
  baseURL: 'https://genius.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': 'genius.p.rapidapi.com',
    'x-rapidapi-key': '4138f1021fmsh75636ffd9147d90p17d1a5jsn8b3645b2de09',
  },
});

const searchHits = (q: string) => api.get(`/search?q=${q}`);
const searchSongsByArtist = (artistId: string) => api.get(`artists/${artistId}/songs`);

export function* fetchHitsWorker({ payload }: ReturnType<typeof fetchHits>) {
  try {
    const response = yield call(searchHits, payload);
    yield put(setHits(response.data.response.hits));
  } catch (e) {
    yield put(setError('someError'));
  }
}

export function* rootSaga() {
  yield all([
    takeLatest(fetchHits.type, fetchHitsWorker),
  ]);
}

const hitsReducer = createReducer(initialState, {
  [fetchHits.type]: (state) => {
    state.loading = true;
  },
  [setHits.type]: (state, action: PayloadAction<Hit[]>) => {
    state.hits = action.payload;
    state.loading = false;
  },
  [setError.type]: (state, action: PayloadAction<string>) => {
    state.error = action.payload;
    state.loading = false;
  },
});

const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
  reducer: hitsReducer,
  devTools: true,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);


export default store;
