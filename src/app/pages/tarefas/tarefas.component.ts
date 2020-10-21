import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { take } from 'rxjs/operators';

import { Tarefa } from './shared/models/tarefa.model';
import { TarefaService } from './shared/services/tarefa.service';
import { TarefaFormComponent } from './tarefa-form/tarefa-form.component';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  colunas = ['descricao', 'concluida', 'acoes'];
  dataSource: Tarefa[] = [];

  constructor(
    private matDialog: MatDialog,
    private tarefaService: TarefaService
  ) { }

  ngOnInit(): void {
    this.getTarefas();
  }

  public excluir(id: number): void {
    this.tarefaService.remover(id);
    this.getTarefas();
  }

  public openModal(id?: number): void {
    this.matDialog.open(TarefaFormComponent, {
      disableClose: true,
      data: {
        id: id || null
      }
    }).afterClosed().pipe(take(1)).subscribe(() => this.getTarefas());
  }

  private getTarefas(): void {
    this.dataSource = this.tarefaService.listarTodos();
  }

}
