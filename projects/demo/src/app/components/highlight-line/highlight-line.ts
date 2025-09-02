import { Component, input } from '@angular/core';
import { PopularityLine } from '../popularity-line/popularity-line';

@Component({
  selector: 'app-highlight-line',
  imports: [PopularityLine],
  templateUrl: './highlight-line.html',
  styleUrl: './highlight-line.scss',
})
export class HighlightLine {
  releaseYear = input.required<string>();
  rating = input.required<string>();
  runtime = input.required<string>();
  voteAverage = input.required<number>();
  voteCount = input.required<number>();
}
