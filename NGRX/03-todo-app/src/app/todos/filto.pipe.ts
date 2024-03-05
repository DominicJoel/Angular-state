import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filter/filter.actions';

@Pipe({
  name: 'filtroTodo',
})
export class FiltoPipe implements PipeTransform {
  transform(todos: Todo[], filtro: any): Todo[] {
    switch (filtro) {
      case 'completados':
        return todos.filter((todo) => todo.completed);

      case 'pendientes':
        return todos.filter((todo) => !todo.completed);

      default:
        return todos;
    }
  }
}
