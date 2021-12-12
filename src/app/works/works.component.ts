import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Title } from '@angular/platform-browser';
import { collection } from '@firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { Experience } from './models/experience.model';

@Component({
  selector: 'vg-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorksComponent implements OnInit {
  public experiences$!: Observable<Experience[]>;

  constructor(
    private fireStore: Firestore,
    private title: Title,
  ){}

  public ngOnInit(): void {
    this.setMetaTags();
    this.getExperiences();
  }

  private getExperiences() {
    const expCollection = collection(this.fireStore, 'experiences');
    this.experiences$ = collectionData(expCollection) as Observable<Experience[]>;
  }

  private setMetaTags(): void {
    this.title.setTitle(`Vugar's Works`);
  }
}
