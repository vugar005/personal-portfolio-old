import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPerformanceCardComponent } from './stock-performance-card.component';

describe('StockPerformanceCardComponent', () => {
  let component: StockPerformanceCardComponent;
  let fixture: ComponentFixture<StockPerformanceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockPerformanceCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPerformanceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
