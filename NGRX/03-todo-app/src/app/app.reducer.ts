// Este va a mostrar como se encuentra el appstate global de la aplicación

import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { filterReducer } from './filter/filter.reducer';

export interface AppState {
  todos: Todo[];
  filtro: string;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filterReducer,
}; //Con esto nos ayudamos para agregar aquí los estados generales de los diferentes modulos que queremos manejar en el app Module
