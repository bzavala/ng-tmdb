import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Credits } from '../../dto-models/credits.model';
import { TvShow } from '../../dto-models/tv.model';
import { TMDB_API_KEY, TMDB_BASE_URL } from '../../tokens';
import { CreditsViewModel } from '../../view-models/credits.view-model';
import { TvShowViewModel } from '../../view-models/tv-show.view-model';

@Injectable({
  providedIn: 'root',
})
export class TvShowService {
  constructor(
    private http: HttpClient,
    @Inject(TMDB_API_KEY) private apiKey: string,
    @Inject(TMDB_BASE_URL) private baseUrl: string
  ) {}

  getTvShow(id: number): Observable<TvShowViewModel> {
    const url = `${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`;
    return this.http.get<TvShow>(url).pipe(map((tvShow) => new TvShowViewModel(tvShow)));
  }

  searchTvShows(query: string, page: number = 1): Observable<TvShowViewModel[]> {
    const url = `${this.baseUrl}/search/tv?api_key=${this.apiKey}&query=${encodeURIComponent(
      query
    )}&page=${page}`;
    return this.http
      .get<{ results: TvShow[] }>(url)
      .pipe(map((response) => response.results.map((tvShow) => new TvShowViewModel(tvShow))));
  }

  getPopularTvShows(page: number = 1): Observable<TvShowViewModel[]> {
    const url = `${this.baseUrl}/tv/popular?api_key=${this.apiKey}&page=${page}`;
    return this.http
      .get<{ results: TvShow[] }>(url)
      .pipe(map((response) => response.results.map((tvShow) => new TvShowViewModel(tvShow))));
  }

  getTopRatedTvShows(page: number = 1): Observable<TvShowViewModel[]> {
    const url = `${this.baseUrl}/tv/top_rated?api_key=${this.apiKey}&page=${page}`;
    return this.http
      .get<{ results: TvShow[] }>(url)
      .pipe(map((response) => response.results.map((tvShow) => new TvShowViewModel(tvShow))));
  }

  getOnTheAirTvShows(page: number = 1): Observable<TvShowViewModel[]> {
    const url = `${this.baseUrl}/tv/on_the_air?api_key=${this.apiKey}&page=${page}`;
    return this.http
      .get<{ results: TvShow[] }>(url)
      .pipe(map((response) => response.results.map((tvShow) => new TvShowViewModel(tvShow))));
  }

  getAiringTodayTvShows(page: number = 1): Observable<TvShowViewModel[]> {
    const url = `${this.baseUrl}/tv/airing_today?api_key=${this.apiKey}&page=${page}`;
    return this.http
      .get<{ results: TvShow[] }>(url)
      .pipe(map((response) => response.results.map((tvShow) => new TvShowViewModel(tvShow))));
  }

  getTvShowCredits(id: number): Observable<CreditsViewModel> {
    const url = `${this.baseUrl}/tv/${id}/credits?api_key=${this.apiKey}`;
    return this.http.get<Credits>(url).pipe(map((credits) => new CreditsViewModel(credits)));
  }
}
