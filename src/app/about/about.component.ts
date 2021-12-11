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
    this.title.setTitle('Vugar Webpage');
    this.meta.addTags([
      { name: 'twitter-card', content: 'Vugar Personal Webpage' },
      { name: 'og:url', content: '/about' },
      { name: 'og:title', content: 'Vugar Personal Webpage' },
      { name: 'og:description', content: 'Personal Webpage of Vugar Abdullayev' },
      {
        name: 'og:image',
        content:
          'https://i0.wp.com/www.thebubble.com/wp-content/uploads/2018/05/5b47d2bc7ec8b_lacasadepapel2-768x444.jpg?resize=735%2C395&ssl=1',
      },
    ]);
  }
}
