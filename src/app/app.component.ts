import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { fadeInLeftOut } from './animations';

@Component({
  selector: 'vg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('fadeInLeftOut', [transition('* => *', useAnimation(fadeInLeftOut))])],
})
export class AppComponent {
  constructor() {
    // eslint-disable-next-line
    (document.querySelector('body')!.style as any).zoom = 1 / window.devicePixelRatio;
  }
  public getState(outlet: any): string {
    return outlet.activatedRouteData.state;
  }
}
