import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieService, MovieViewModel } from 'ng-tmdb';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [MovieService, MovieViewModel],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('demo');

  private _movieService = inject(MovieService);

  ngOnInit() {
    this._movieService.getNowPlayingMovies().subscribe({
      next: (value) => console.log(value),
      error: (err) => console.error(err),
    });
  }
}
