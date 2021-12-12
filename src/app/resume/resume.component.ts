import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'vg-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeComponent implements OnInit {
  public loaded = false;
  constructor(private _cdr: ChangeDetectorRef, private title: Title) {}

  public ngOnInit(): void {
    this.setMetaTags();
    setTimeout(() => {
      this.loaded = true;
      this._cdr.detectChanges();
    }, 3000);
  }

  private setMetaTags(): void {
    this.title.setTitle(`Vugar Resume`);
  }
}
