import { Component, ChangeDetectionStrategy } from '@angular/core';
import { switchToView } from '../app.utils';
import { BLOG_URL } from './header.constants';

@Component({
  selector: 'vg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public blogUrl = BLOG_URL;

  public onNavChange(url: string): void {
    switchToView(`#${url}`);
  }
}
