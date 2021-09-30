import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as filtrosActions from '../../filtro/filtro.actions';
import { setFilter } from '../../filtro/filtro.actions';
import { clearCompleted } from '../store/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  currentFilter: filtrosActions.filtrosValidos;
  pendientes = 0;
  filterTypes: filtrosActions.filtrosValidos[] = 
    [
      filtrosActions.filtrosValidos.TODOS,
      filtrosActions.filtrosValidos.PENDIENTES,
      filtrosActions.filtrosValidos.COMPLETADOS
    ];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filtro').subscribe( filter => {
    this.store.subscribe(state => {
      this.currentFilter = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    })
  }

  switchFilter(filter: filtrosActions.filtrosValidos): void {
    this.store.dispatch(setFilter({filter}));
  }


  clearCompleted() {
    this.store.dispatch(clearCompleted());
  }
}
