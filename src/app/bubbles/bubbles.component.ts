import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vg-bubbles',
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BubblesComponent {
  public bubbles = new Array(10);
}
