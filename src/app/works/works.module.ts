import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksComponent } from './works.component';
import { WorksRoutingModule } from './works.routing';

@NgModule({
  declarations: [WorksComponent],
  imports: [CommonModule, WorksRoutingModule],
})
export class WorksModule {}
