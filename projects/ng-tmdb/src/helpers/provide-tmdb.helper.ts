// projects/angular-tmdb/src/lib/provide-tmdb.ts
import { provideHttpClient } from '@angular/common/http';
import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { TMDB_API_KEY, TMDB_BASE_URL } from '../tokens';

/**
 * Helper function to configure TMDB providers for Angular apps.
 * Ensures HttpClient and API key/base URL are set up correctly.
 */
export function provideTmdb(config: { apiKey: string; baseUrl?: string }): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideHttpClient(),
    { provide: TMDB_API_KEY, useValue: config.apiKey },
    { provide: TMDB_BASE_URL, useValue: config.baseUrl ?? 'https://api.themoviedb.org/3' },
  ]);
}
