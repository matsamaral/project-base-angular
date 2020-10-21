import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { LoginGuard } from './core/guards/login/login.guard';

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./pages/login/login.module').then(mod => mod.LoginModule), canActivate: [LoginGuard]},
  {path: '', loadChildren:  () => import('./pages/home/home.module').then(mod => mod.HomeModule), canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
