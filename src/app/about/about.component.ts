import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'vg-about-me',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  public ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags(): void {
    this.title.setTitle('About Vugar');
    this.meta.addTags([
      { name: 'twitter-card', content: 'About Vugar' },
      { name: 'og:url', content: '/about' },
      { name: 'og:title', content: 'About Vugar' },
      { name: 'og:description', content: 'Personal Webpage of Vugar Abdullayev' },
      {
        name: 'og:image',
        content: 'https://raw.githubusercontent.com/vugar005/personal-portfolio/master/src/assets/img/desert.webp',
      },
    ]);
  }
}
