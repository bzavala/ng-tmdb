import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieViewModel } from 'ng-tmdb';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { PopularityLine } from '../popularity-line/popularity-line';

@Component({
  selector: 'app-movie-list-item',
  imports: [Card, RouterModule, PopularityLine, TruncatePipe, Button],
  templateUrl: './movie-list-item.html',
  styleUrl: './movie-list-item.scss',
})
export class MovieListItem {
  movie = input.required<MovieViewModel>();
}
