import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'vg-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeComponent implements OnInit {
  public loaded = false;
  constructor(private _cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    setTimeout(() => {
      this.loaded = true;
      this._cdr.detectChanges();
    }, 3000);
  }
}
