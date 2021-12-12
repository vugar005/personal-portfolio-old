import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) },
  { path: 'resume', loadChildren: () => import('./resume/resume.module').then((m) => m.ResumeModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule) },
  { path: 'works', loadChildren: () => import('./works/works.module').then((m) => m.WorksModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy', useHash: true, initialNavigation: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
