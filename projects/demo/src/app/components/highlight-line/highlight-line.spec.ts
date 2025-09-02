import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightLine } from './highlight-line';

describe('HighlightLine', () => {
  let component: HighlightLine;
  let fixture: ComponentFixture<HighlightLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightLine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightLine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
