import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarfieldComponent } from './starfield.component';



@NgModule({
  declarations: [
    StarfieldComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [StarfieldComponent]
})
export class StarfieldModule { }
