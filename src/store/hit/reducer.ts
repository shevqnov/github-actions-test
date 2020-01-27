import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { fetchHits, setHits, setError } from './actions';
import { Hit } from '../../models/hit';

export type HitsState = Readonly<{
  hits: Hit[];
  error: string | null;
  loading: boolean;
}>

export const initialState: HitsState = {
  hits: [],
  error: null,
  loading: false,
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


export default hitsReducer;
