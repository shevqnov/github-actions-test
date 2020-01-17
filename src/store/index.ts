import axios from 'axios';

import {
  configureStore,
  createAction,
  createReducer,
  PayloadAction,
} from '@reduxjs/toolkit';
import { Dispatch } from 'react';

export interface State {
  hits: Hit[];
  error: string | null;
  loading: boolean;
}

type HitType = 'song' | 'album' | 'artist'

interface Hit {
  highlights: [];
  index: string;
  type: HitType;
  result: {
    id: string;
    full_title: string;
    song_art_image_url: string;
  };
}

const initialState: State = {
  hits: [],
  error: null,
  loading: false,
};

const fetchHits = createAction<string>('fetch hits');
const setHits = createAction<Hit[]>('set hits');
const setError = createAction<string>('set error');

export const fetchHitsThunk = (q: string) => async (
  dispatch: Dispatch<ReturnType<typeof setHits> | ReturnType<typeof setError>>) => {
  try {
    const response = await axios.get(`https://genius.p.rapidapi.com/search?q=${q}`, {
      headers: {
        'x-rapidapi-host': 'genius.p.rapidapi.com',
        'x-rapidapi-key': '4138f1021fmsh75636ffd9147d90p17d1a5jsn8b3645b2de09',
      },
    });
    dispatch(setHits(response.data.response.hits));
  } catch (e) {
    dispatch(setError('someError'));
  }
};

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


const store = configureStore({
  reducer: hitsReducer,
  devTools: true,
});


export default store;
