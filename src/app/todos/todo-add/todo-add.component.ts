import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { addTodo } from '../todo.actions';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

 txtInput: FormControl;

  constructor(private store: Store<AppState>) { 
    this.txtInput = new FormControl('', Validators.required);
  }

  ngOnInit() {
  }

  agregar() {
    if (this.txtInput.invalid) { return; }

    console.log(  this.txtInput.value);
    console.log(  this.txtInput.valid);

    this.store.dispatch(addTodo({ texto: this.txtInput.value }));
    this.txtInput.reset();
  }

}
