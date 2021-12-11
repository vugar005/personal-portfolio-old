import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DowJonesPerformanceComponent } from './dow-jones-performance.component';
import { StockPerformanceCardComponent } from './stock-performance-card/stock-performance-card.component';
import { HttpClientModule } from '@angular/common/http';
import { DowJonesPerformanceRoutingModule } from './dow-jones.routing';

@NgModule({
  declarations: [DowJonesPerformanceComponent, StockPerformanceCardComponent],
  imports: [CommonModule, HttpClientModule, DowJonesPerformanceRoutingModule],
  exports: [DowJonesPerformanceComponent],
})
export class DowJonesPerformanceModule {}
