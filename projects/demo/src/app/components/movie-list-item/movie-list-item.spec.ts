import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListItem } from './movie-list-item';

describe('MovieListItem', () => {
  let component: MovieListItem;
  let fixture: ComponentFixture<MovieListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
