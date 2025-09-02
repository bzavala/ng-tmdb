import { Component, inject, signal } from '@angular/core';
import { MovieService, MovieViewModel } from 'ng-tmdb';
import { MovieList } from '../movie-list/movie-list';

@Component({
  selector: 'app-home',
  imports: [MovieList],
  providers: [MovieService, MovieViewModel],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private _movieService = inject(MovieService);
  moviesNowPlaying = signal<MovieViewModel[]>([]);

  ngOnInit(): void {
    this._getNowPlayingMovies();
  }

  private _getNowPlayingMovies(): void {
    this._movieService.getNowPlayingMovies().subscribe({
      next: (value) => this.moviesNowPlaying.set(value),
      error: (err) => console.error(err),
    });
  }
}
