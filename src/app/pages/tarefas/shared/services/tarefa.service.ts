import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Tarefa } from '../models/tarefa.model';

@Injectable()
export class TarefaService {

  url = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  listarTodos(): Tarefa[] {
    const tarefas = localStorage.getItem('tarefas');
    return tarefas ? JSON.parse(tarefas) : [];
  }

  buscarPorId(id: number): Tarefa {
    const tarefas = this.listarTodos();
    return tarefas.find((tarefa) => tarefa.id === id);
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage.setItem('tarefas', JSON.stringify(tarefas));

    // this.httpClient.put<Tarefa>(`${this.url}/tarefas/${tarefa.id}`, tarefa);
    // this.httpClient.post<boolean>(`${this.url}/tarefas`, tarefa);
    // this.httpClient.delete<string>(`${this.url}/tarefas/${tarefa.id}`).pipe(take(1)).subscribe((response) =>{ console.log(response)});
    // this.httpClient.get<Tarefa[]>(`${this.url}/tarefas/${tarefa.id}`);
  }

  remover(id: number): void {
    let tarefas = this.listarTodos();
    tarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }
}
