import { transition, trigger, useAnimation } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { fadeInLeftOut } from './animations';

@Component({
  selector: 'vg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('fadeInLeftOut', [transition('* => *', useAnimation(fadeInLeftOut))])],
})
export class AppComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: string
  ) {
    if (isPlatformBrowser(this.platformId)) {
      // eslint-disable-next-line
     (document.querySelector('body')!.style as any).zoom = 1 / window.devicePixelRatio;
    }

  }
  public getState(outlet: any): string {
    return outlet.activatedRouteData.state;
  }
}
