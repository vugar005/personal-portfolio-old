import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'vg-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {
  constructor(private title: Title) {}

  public ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags(): void {
    this.title.setTitle(`Contact Vugar`);
  }
}
