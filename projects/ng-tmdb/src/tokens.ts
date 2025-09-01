import { InjectionToken } from '@angular/core';

export const TMDB_API_KEY = new InjectionToken<string>('TMDB_API_KEY');
export const TMDB_BASE_URL = new InjectionToken<string>('TMDB_BASE_URL', {
  providedIn: 'root',
  factory: () => 'https://api.themoviedb.org/3',
});
