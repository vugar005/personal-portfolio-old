import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vg-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorksComponent {}
