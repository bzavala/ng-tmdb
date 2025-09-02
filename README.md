# ng-tmdb

An Angular library that provides easy access to The Movie Database (TMDB) API, offering services and view-models for movies, TV shows, and people.

## Features

- **MovieService**: Fetch movie details, now playing, popular, and more.
- **TvShowService**: Access TV show information, trending, and recommendations.
- **PersonService**: Retrieve actor, director, and crew info from TMDB.
- **View-models**: Use provided view-models for easy state management and UI binding.

## Prerequisites

- **TMDB API Key**: You must have a TMDB API key. [Get an API key here.](https://developer.themoviedb.org/docs/getting-started)

## Getting Started

### 1. Install the package

```bash
npm install ng-tmdb
```

### 2. Configure TMDB API Key

In your `app.config.ts`, add `provideTmdb({ apiKey: '<your api key here>' })` to your `ApplicationConfig` providers:

```typescript
import { provideTmdb } from 'ng-tmdb';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideTmdb({ apiKey: '<your api key here>' }),
    // ...other providers
  ],
};
```

### 3. Provide Services and View-Models

Add the desired TMDB services and view-models to your component's providers:

```typescript
import { Component } from '@angular/core';
import { MovieService, MovieViewModel } from 'ng-tmdb';

@Component({
  selector: 'app-home',
  providers: [MovieService, MovieViewModel],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
```

## Usage Examples

### MovieService Example

```typescript
import { Component } from '@angular/core';
import { MovieService } from 'ng-tmdb';

@Component({
  selector: 'app-movies',
  providers: [MovieService],
  template: `<ul>
    @for (movie of movies; track movie.id) {
      <li>{{ movie.title }}</li>
    }
  </ul>`,
})
export class MoviesComponent {
  movies = [];
  constructor(private _movieService: MovieService) {
    this._movieService.getNowPlayingMovies().subscribe({
      next: (result) => (this.movies = result.results),
      error: (err) => console.error(err),
    });
  }
}
```

### TvShowService Example

```typescript
import { Component } from '@angular/core';
import { TvShowService } from 'ng-tmdb';

@Component({
  selector: 'app-tvshows',
  providers: [TvShowService],
  template: `<ul>
    @for (show of shows; track show.id) {
      <li>{{ show.name }}</li>
    }
  </ul>`,
})
export class TvShowsComponent {
  shows = [];
  constructor(private _tvShowService: TvShowService) {
    this._tvShowService.getPopularTvShows().subscribe({
      next: (result) => (this.shows = result.results),
      error: (err) => console.error(err),
    });
  }
}
```

### PersonService Example

```typescript
import { Component } from '@angular/core';
import { PersonService } from 'ng-tmdb';

@Component({
  selector: 'app-people',
  providers: [PersonService],
  template: `<ul>
    @for (person of people; track person.id) {
      <li>{{ person.name }}</li>
    }
  </ul>`,
})
export class PeopleComponent {
  people = [];
  constructor(private _personService: PersonService) {
    this._personService.getPopularPeople().subscribe({
      next: (result) => (this.people = result.results),
      error: (err) => console.error(err),
    });
  }
}
```

## TMDB API Key Setup

1. [Sign up for a TMDB account](https://developer.themoviedb.org/docs/getting-started) if you don't have one.
2. Create a new API key in your TMDB account settings.
3. Use the API key in your Angular app configuration:

```typescript
provideTmdb({ apiKey: '<your api key here>' });
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to help improve ng-tmdb.

## License

MIT License. See [LICENSE](./LICENSE) for details.
