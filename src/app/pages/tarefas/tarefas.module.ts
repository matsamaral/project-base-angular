import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TarefasComponent } from './tarefas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TarefaFormComponent } from './tarefa-form/tarefa-form.component';
import { TarefaService } from './shared/services/tarefa.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatTableModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [TarefasComponent, TarefaFormComponent],
  exports: [TarefasComponent],
  providers: [TarefaService]
})
export class TarefasModule { }
