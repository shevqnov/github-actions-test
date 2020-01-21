import { createAction } from '@reduxjs/toolkit';
import { Song } from '../../models/song';

export const searchSongsByArtist = createAction<string>('search song by artist');
export const setSongs = createAction<Song[]>('set songs');
