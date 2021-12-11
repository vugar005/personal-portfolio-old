import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowJonesPerformanceComponent } from './dow-jones-performance.component';

describe('DowJonesPerformanceComponent', () => {
  let component: DowJonesPerformanceComponent;
  let fixture: ComponentFixture<DowJonesPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DowJonesPerformanceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DowJonesPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
