import { Movie } from '../dto-models/movie.model';
import { BackdropSize, PosterSize } from '../enums/image-sizes.enum';
import { ImageHelper } from '../helpers/image.helper';

export class MovieViewModel implements Movie {
  id: number = 0;
  title: string = '';
  overview: string = '';
  release_date: string = '';
  poster_path: string | null = null;
  backdrop_path: string | null = null;
  vote_average: number = 0;
  vote_count: number = 0;
  genre_ids: number[] = [];
  original_language: string = '';
  popularity: number = 0;
  adult: boolean = false;
  video: boolean = false;
  original_title: string = '';

  constructor(data: Partial<Movie> = {}) {
    Object.assign(this, data);
  }

  get releaseYear(): number {
    if (this.release_date && this.release_date.length >= 4) {
      return parseInt(this.release_date.substring(0, 4), 10);
    }
    return NaN;
  }

  get posterUrl(): string {
    return ImageHelper.getPosterUrl(PosterSize.W500, this.poster_path);
  }

  get backdropUrl(): string {
    return ImageHelper.getBackdropUrl(BackdropSize.W780, this.backdrop_path);
  }

  get userScore(): string {
    return `${Math.round(this.vote_average * 10)}%`;
  }
}
