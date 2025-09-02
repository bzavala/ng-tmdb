import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularityLine } from './popularity-line';

describe('PopularityLine', () => {
  let component: PopularityLine;
  let fixture: ComponentFixture<PopularityLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularityLine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularityLine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
