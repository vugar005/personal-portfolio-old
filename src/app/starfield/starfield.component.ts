import { AfterViewInit, Component, NgZone } from '@angular/core';
import { PARTICLE_JS_CONFIG } from './particles-js.config';
declare const particlesJS: any;

@Component({
  selector: 'vg-starfield',
  templateUrl: './starfield.component.html',
  styleUrls: ['./starfield.component.scss'],
})
export class StarfieldComponent implements AfterViewInit {
  constructor(private zone: NgZone) {}

  public ngAfterViewInit(): void {
    this.initStars();
  }

  private initStars(): void {
    this.zone.runOutsideAngular(() => {
      particlesJS('starfield', PARTICLE_JS_CONFIG, function () {});
    });
  }
}
