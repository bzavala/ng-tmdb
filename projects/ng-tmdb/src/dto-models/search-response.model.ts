import { Movie } from './movie.model';
import { TvShow } from './tv.model';

export interface SearchMovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface SearchTvResponse {
  page: number;
  results: TvShow[];
  total_pages: number;
  total_results: number;
}
