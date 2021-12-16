import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MOST_ACTIVE_STOCKS_URL } from './dow-jones-performance.constants';
import { Stock } from './models/stock.model';

@Component({
  selector: 'vg-dow-jones-performance',
  templateUrl: './dow-jones-performance.component.html',
  styleUrls: ['./dow-jones-performance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DowJonesPerformanceComponent implements OnInit {
  public mostActiveStocks?: Stock[];
  constructor(private httpClient: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getMostActiveStocks();
  }

  private getMostActiveStocks(): void {
    this.httpClient.get<Stock[]>(MOST_ACTIVE_STOCKS_URL).subscribe((data) => {
      this.mostActiveStocks = data;
      this.cdr.detectChanges();
    });
  }
}
