import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { FormControl, Form, Validators } from '@angular/forms';

import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoList: Todo;


  @ViewChild('inputFisico', null) txtInputFisico: ElementRef;
  chkCompletado: FormControl;
  txtInput: FormControl;

  editando = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.chkCompletado = new FormControl(this.todoList.completado);
    this.txtInput = new FormControl(this.todoList.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch(actions.toggle({ id: this.todoList.id }));
    });

  }

  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todoList.texto);

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }


  TerminarEdicion() {
    this.editando = false;
    if (this.txtInput.invalid) { return; }

    if (this.txtInput.value === this.todoList.texto) { return; }

    this.store.dispatch(actions.editar({ id: this.todoList.id, texto: this.txtInput.value }));
  }
  borrar() {
    this.store.dispatch(actions.borrar({ id: this.todoList.id }));
  }

}
