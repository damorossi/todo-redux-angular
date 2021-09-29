import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import * as todoActions from '../store/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputElement') txtInputRef: ElementRef;
  editing = false;
  checkCompleted: FormControl;
  txtInput: FormControl;
  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.checkCompleted.valueChanges.subscribe( value => {
      console.log('som', value);
      this.store.dispatch(todoActions.toggleTodo({id: this.todo.id}));
    })
  }

  editItem() {
    this.editing = true;
    setTimeout(() => {
      this.txtInputRef.nativeElement.select();
    })
  }
  deleteItem() {
    this.store.dispatch(todoActions.borrarTodo({id: this.todo.id}))
  }

  finishEditing() {
    this.editing = false;
    if(this.txtInput.invalid) {
      this.txtInput.setValue(this.todo.texto);
      return;
    }
    if(this.txtInput.value === this.todo.texto) {
      return;
    }
    this.store.dispatch(todoActions.editarTodo({id: this.todo.id, newText: this.txtInput.value}))
  }
}
