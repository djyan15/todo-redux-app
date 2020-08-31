import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtroValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtroValidos): any {

    switch (filtro) {
      case 'completados':
        return todos.filter(todo => todo.completado);
        break;
      case 'pendientes':
        return todos.filter(todo => !todo.completado);

        break;
      default:
        return todos;
        break;
    }

    return todos;
  }

}
