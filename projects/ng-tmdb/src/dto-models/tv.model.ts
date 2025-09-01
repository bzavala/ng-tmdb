export interface TvGenre {
  id: number;
  name: string;
}

export interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path?: string | null;
}

export interface Network {
  id: number;
  name: string;
  origin_country: string;
  logo_path?: string | null;
}

export interface Season {
  id: number;
  name: string;
  season_number: number;
  episode_count: number;
  air_date?: string;
  poster_path?: string | null;
  overview: string;
}

export interface TvShow {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  first_air_date: string;
  last_air_date?: string;
  in_production: boolean;
  number_of_seasons: number;
  number_of_episodes: number;
  popularity: number;
  vote_average: number;
  vote_count: number;
  poster_path?: string | null;
  backdrop_path?: string | null;

  genres?: TvGenre[];
  created_by?: CreatedBy[];
  networks?: Network[];
  seasons?: Season[];
}
