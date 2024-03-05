import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filter.actions';

export const initialState = 'todos';

const _filterReducer = createReducer(
  initialState,
  on(setFiltro, (state, { filtro }) => filtro)
);

export function filterReducer(state: any, action: any) {
  return _filterReducer(state, action);
}
