import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/core/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: HomeComponent}]),
    HeaderModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
