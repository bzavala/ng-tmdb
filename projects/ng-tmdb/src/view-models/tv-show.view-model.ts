import { CreatedBy, Network, Season, TvGenre, TvShow } from '../dto-models/tv.model';
import { BackdropSize, PosterSize } from '../enums/image-sizes.enum';
import { ImageHelper } from '../helpers/image.helper';

const PLACEHOLDER_POSTER = '/assets/img/poster-placeholder.png';
const PLACEHOLDER_BACKDROP = '/assets/img/backdrop-placeholder.png';

export class TvShowViewModel implements TvShow {
  id: number = 0;
  name: string = '';
  original_name: string = '';
  overview: string = '';
  poster_path: string | null = null;
  backdrop_path: string | null = null;
  in_production: boolean = false;
  number_of_seasons: number = 0;
  number_of_episodes: number = 0;
  genres: TvGenre[] = [];
  created_by: CreatedBy[] = [];
  networks: Network[] = [];
  seasons: Season[] = [];
  first_air_date: string = '';
  last_air_date: string = '';
  vote_average: number = 0;
  vote_count: number = 0;
  popularity: number = 0;
  genre_ids: number[] = [];
  origin_country: string[] = [];
  original_language: string = '';
  adult: boolean = false;

  constructor(data: Partial<TvShow> = {}) {
    Object.assign(this, data);
  }

  /**
   * Returns the year of the first air date as a string.
   */
  get firstAirYear(): string {
    if (!this.first_air_date) return '';
    const year = new Date(this.first_air_date).getFullYear();
    return isNaN(year) ? '' : String(year);
  }

  /**
   * Returns the year of the last air date as a string.
   */
  get lastAirYear(): string {
    if (!this.last_air_date) return '';
    const year = new Date(this.last_air_date).getFullYear();
    return isNaN(year) ? '' : String(year);
  }

  /**
   * Builds the full poster image URL or returns a placeholder if not available.
   */
  get posterUrl(): string {
    return ImageHelper.getPosterUrl(PosterSize.W500, this.poster_path);
  }

  /**
   * Builds the full backdrop image URL or returns a placeholder if not available.
   */
  get backdropUrl(): string {
    return ImageHelper.getBackdropUrl(BackdropSize.W780, this.backdrop_path);
  }

  /**
   * Converts the vote_average into a user score percentage string.
   */
  get userScore(): string {
    return `${Math.round(this.vote_average * 10)}%`;
  }
}
