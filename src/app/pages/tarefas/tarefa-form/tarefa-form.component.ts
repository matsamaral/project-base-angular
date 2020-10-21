import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tarefa } from '../shared/models/tarefa.model';
import { TarefaService } from '../shared/services/tarefa.service';

@Component({
  selector: 'app-tarefa-form',
  templateUrl: './tarefa-form.component.html',
  styleUrls: ['./tarefa-form.component.scss']
})
export class TarefaFormComponent implements OnInit {

  tarefaForm: FormGroup;
  id: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) protected data: any,
    protected dialogRef: MatDialogRef<TemplateRef<TarefaFormComponent>>,
    private formBuider: FormBuilder,
    private tarefaService: TarefaService
  ) {
    this.id = this.data?.id;
  }

  ngOnInit(): void {
    this.createForm();
  }

  public close(): void {
    this.dialogRef.close();
  }

  public salvar(): void {
    if (this.tarefaForm.invalid) {
      this.tarefaForm.markAllAsTouched();
      return;
    }

    if (this.id) {
      this.tarefaService.atualizar(this.tarefaForm.value as Tarefa);
    } else {
      this.tarefaService.cadastrar(this.tarefaForm.value as Tarefa);
    }

    this.close();
  }

  private createForm(): void {
    this.tarefaForm = this.formBuider.group({
      id: [null],
      descricao: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      concluida: [false]
    });

    if (this.id) { this.getAndSetValues(); }
  }

  private getAndSetValues(): void {
    this.tarefaForm.patchValue(this.tarefaService.buscarPorId(this.id));
  }

}
