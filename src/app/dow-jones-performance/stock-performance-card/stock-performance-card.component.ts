import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Stock } from '../models/stock.model';

@Component({
  selector: 'vg-stock-performance-card',
  templateUrl: './stock-performance-card.component.html',
  styleUrls: ['./stock-performance-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockPerformanceCardComponent {
  @Input() stock!: Stock;
}
