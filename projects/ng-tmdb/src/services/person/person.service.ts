import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../dto-models/movie.model';
import { Person } from '../../dto-models/person.model';
import { TvShow } from '../../dto-models/tv.model';
import { TMDB_API_KEY, TMDB_BASE_URL } from '../../tokens';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(
    private http: HttpClient,
    @Inject(TMDB_API_KEY) private apiKey: string,
    @Inject(TMDB_BASE_URL) private baseUrl: string
  ) {}

  getPersonDetails(personId: number): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/person/${personId}?api_key=${this.apiKey}`);
  }

  getPersonMovieCredits(personId: number): Observable<{ cast: Movie[]; crew: Movie[] }> {
    return this.http.get<{ cast: Movie[]; crew: Movie[] }>(
      `${this.baseUrl}/person/${personId}/movie_credits?api_key=${this.apiKey}`
    );
  }

  getPersonTvCredits(personId: number): Observable<{ cast: TvShow[]; crew: TvShow[] }> {
    return this.http.get<{ cast: TvShow[]; crew: TvShow[] }>(
      `${this.baseUrl}/person/${personId}/tv_credits?api_key=${this.apiKey}`
    );
  }
}
