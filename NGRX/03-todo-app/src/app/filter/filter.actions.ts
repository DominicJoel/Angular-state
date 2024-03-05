import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'Pendientes';

export const setFiltro = createAction(
  '[Filter] set filter',
  props<{ filtro: filtrosValidos }>()
);
