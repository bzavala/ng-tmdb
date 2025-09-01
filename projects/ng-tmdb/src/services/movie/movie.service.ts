import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Credits } from '../../dto-models/credits.model';
import { Movie } from '../../dto-models/movie.model';
import { TMDB_API_KEY, TMDB_BASE_URL } from '../../tokens';
import { CreditsViewModel } from '../../view-models/credits.view-model';
import { MovieViewModel } from '../../view-models/movie.view-model';

@Injectable({ providedIn: 'root' })
export class MovieService {
  constructor(
    private http: HttpClient,
    @Inject(TMDB_API_KEY) private apiKey: string,
    @Inject(TMDB_BASE_URL) private baseUrl: string
  ) {}

  getMovie(id: number): Observable<MovieViewModel> {
    return this.http
      .get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`)
      .pipe(map((m) => new MovieViewModel(m)));
  }

  getMovieCredits(id: number): Observable<CreditsViewModel> {
    const url = `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`;
    return this.http.get<Credits>(url).pipe(map((credits) => new CreditsViewModel(credits)));
  }

  searchMovies(query: string, page: number = 1): Observable<MovieViewModel[]> {
    return this.http
      .get<{ results: Movie[] }>(
        `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${encodeURIComponent(
          query
        )}&page=${page}`
      )
      .pipe(map((res) => res.results.map((m) => new MovieViewModel(m))));
  }

  getPopularMovies(page: number = 1): Observable<MovieViewModel[]> {
    return this.http
      .get<{ results: Movie[] }>(
        `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`
      )
      .pipe(map((res) => res.results.map((m) => new MovieViewModel(m))));
  }

  getTopRatedMovies(page: number = 1): Observable<MovieViewModel[]> {
    return this.http
      .get<{ results: Movie[] }>(
        `${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}&page=${page}`
      )
      .pipe(map((res) => res.results.map((m) => new MovieViewModel(m))));
  }

  getUpcomingMovies(page: number = 1): Observable<MovieViewModel[]> {
    return this.http
      .get<{ results: Movie[] }>(
        `${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}&page=${page}`
      )
      .pipe(map((res) => res.results.map((m) => new MovieViewModel(m))));
  }

  getNowPlayingMovies(page: number = 1): Observable<MovieViewModel[]> {
    return this.http
      .get<{ results: Movie[] }>(
        `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&page=${page}`
      )
      .pipe(map((res) => res.results.map((m) => new MovieViewModel(m))));
  }
}
