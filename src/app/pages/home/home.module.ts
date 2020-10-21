import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/core/components/header/header.module';
import { TarefasComponent } from '../tarefas/tarefas.component';
import { TarefasModule } from '../tarefas/tarefas.module';

@NgModule({
  imports: [
    CommonModule,
    TarefasModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent, children: [
        {path: 'tarefas', component: TarefasComponent}
      ]}
    ]),
    HeaderModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
