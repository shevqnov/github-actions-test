export interface HitsResponse {
  hits: Hit[];
}

export interface Hit {
  index: Index;
  type: Index;
  result: Result;
}

export enum Index {
  Song = 'song',
}

export interface Result {
  annotation_count: number;
  api_path: string;
  full_title: string;
  header_image_thumbnail_url: string;
  header_image_url: string;
  id: number;
  lyrics_owner_id: number;
  lyrics_state: LyricsState;
  path: string;
  pyongs_count: number;
  song_art_image_thumbnail_url: string;
  song_art_image_url: string;
  stats: Stats;
  title: string;
  title_with_featured: string;
  url: string;
  primary_artist: PrimaryArtist;
}

export enum LyricsState {
  Complete = 'complete',
}

export interface PrimaryArtist {
  header_image_url: string;
  id: number;
  image_url: string;
  is_meme_verified: boolean;
  is_verified: boolean;
  name: string;
  url: string;
  iq: number;
}
export interface Stats {
  unreviewed_annotations: number;
  concurrents?: number;
  hot: boolean;
  pageviews: number;
}
