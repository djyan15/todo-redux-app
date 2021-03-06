import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtroValidos } from 'src/app/filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[];
  filtro: filtroValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.subscribe(({todos, filtro}) => {
      this.todoList = todos;
      this.filtro = filtro;
    });
  }

}
