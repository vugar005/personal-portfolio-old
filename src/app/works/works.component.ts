import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
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
    private fireStore: Firestore
  ){}

  public ngOnInit(): void {
    this.getExperiences();
  }

  private getExperiences() {
    const expCollection = collection(this.fireStore, 'experiences');
    this.experiences$ = collectionData(expCollection) as Observable<Experience[]>;
  }
}
