import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'todoFilter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    switch(filtro) {
      case filtrosValidos.COMPLETADOS: 
        return todos.filter(todo => todo.completado);
      case filtrosValidos.PENDIENTES: 
        return todos.filter(todo => !todo.completado);
      default: 
        return todos;
    }
  }
}
