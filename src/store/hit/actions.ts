import { createAction } from '@reduxjs/toolkit';
import { Hit } from '../../models/hit';

export const fetchHits = createAction<string>('fetch hits');
export const setHits = createAction<Hit[]>('set hits');
export const setError = createAction<string>('set error');
