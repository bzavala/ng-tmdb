import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowListItem } from './tv-show-list-item';

describe('TvShowListItem', () => {
  let component: TvShowListItem;
  let fixture: ComponentFixture<TvShowListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvShowListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvShowListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
