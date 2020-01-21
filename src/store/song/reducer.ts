import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { Song } from '../../models/song';
import { searchSongsByArtist, setSongs } from './actions';

export interface SongsState {
    list: Song[];
    loading: boolean;
}

export const initialState: SongsState = {
  list: [],
  loading: false,
};

const reducer = createReducer(initialState, {
  [searchSongsByArtist.type]: (state) => {
    state.loading = true;
  },
  [setSongs.type]: (state, action: PayloadAction<Song[]>) => {
    state.list = action.payload;
    state.loading = false;
  },
});

export default reducer;
