import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./pages/login/login.module').then(mod => mod.LoginModule)},
  {path: '', loadChildren:  () => import('./pages/home/home.module').then(mod => mod.HomeModule)},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
