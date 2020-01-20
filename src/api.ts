import axios from 'axios';

const api = axios.create({
  baseURL: 'https://genius.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': 'genius.p.rapidapi.com',
    'x-rapidapi-key': '4138f1021fmsh75636ffd9147d90p17d1a5jsn8b3645b2de09',
  },
});

export const searchHits = (q: string) => api.get(`/search?q=${q}`);
export const searchSongsByArtist = (artistId: string) => api.get(`artists/${artistId}/songs`);
