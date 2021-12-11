import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ResumeRoutingModule } from './resume.routing';
import { ProgressSpinnerModule } from '../progress-spinner/progress-spinner.module';

@NgModule({
  declarations: [ResumeComponent],
  imports: [CommonModule, ResumeRoutingModule, ProgressSpinnerModule],
})
export class ResumeModule {}
