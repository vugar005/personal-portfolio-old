import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vg-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
