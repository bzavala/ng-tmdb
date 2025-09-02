import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByLine } from './by-line';

describe('ByLine', () => {
  let component: ByLine;
  let fixture: ComponentFixture<ByLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByLine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByLine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
