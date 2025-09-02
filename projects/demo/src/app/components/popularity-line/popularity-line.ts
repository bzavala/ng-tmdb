import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { CompactNumberPipe } from '../../pipes/compact-number.pipe';

@Component({
  selector: 'app-popularity-line',
  imports: [CompactNumberPipe, DecimalPipe],
  templateUrl: './popularity-line.html',
  styleUrl: './popularity-line.scss',
})
export class PopularityLine {
  voteAverage = input.required<number>();
  voteCount = input.required<number>();
}
