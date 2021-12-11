import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DowJonesPerformanceComponent } from './dow-jones-performance.component';

const routes: Routes = [{ path: '', component: DowJonesPerformanceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DowJonesPerformanceRoutingModule {}
