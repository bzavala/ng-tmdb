import { Component, inject, input, signal } from '@angular/core';
import { CreditsViewModel, MovieService, MovieViewModel } from 'ng-tmdb';

@Component({
  selector: 'app-by-line',
  imports: [],
  providers: [MovieService, MovieViewModel],
  templateUrl: './by-line.html',
  styleUrl: './by-line.scss',
})
export class ByLine {
  private _movieService = inject(MovieService);
  movieId = input.required<number>();
  movieCredits = signal<CreditsViewModel | null>(null);

  ngOnInit(): void {
    this._movieService.getMovieCredits(this.movieId()).subscribe({
      next: (value) => this.movieCredits.set(value),
    });
  }
}
