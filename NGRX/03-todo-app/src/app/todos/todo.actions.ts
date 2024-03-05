import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] create everything',
  props<{ text: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);

export const editar = createAction(
  '[TODO] Edit Todo',
  props<{ id: number; text: string }>()
);

export const borrar = createAction(
  '[TODO] Delete Todo',
  props<{ id: number }>()
);

export const seleccionarTodo = createAction(
  '[TODO] Toggle all Todo',
  props<{ selected: boolean }>()
);

// props una función que recibe los argumentoss
