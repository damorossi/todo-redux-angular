import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { createTodo } from '../store/todo.actions';
import * as todoActions from './../store/todo.actions';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  txtInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('Mi Task', Validators.required);
   }

  ngOnInit(): void {
  }
  
  agregar() {
    if(this.txtInput.invalid) {
    }
    this.store.dispatch(todoActions.createTodo( {task: this.txtInput.value} ));
    this.txtInput.reset();
  }
}
