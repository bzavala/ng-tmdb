import { Component, input } from '@angular/core';
import { MovieViewModel } from 'ng-tmdb';
import { MovieListItem } from '../movie-list-item/movie-list-item';

@Component({
  selector: 'app-movie-list',
  imports: [MovieListItem],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.scss',
})
export class MovieList {
  movies = input.required<MovieViewModel[]>();
  limit = input<number>(20);
  title = input<string | null>(null);
}
