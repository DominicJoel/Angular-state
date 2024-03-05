import { createAction, props } from '@ngrx/store';

export const incrementar = createAction('[Contador] Incrementar');
export const decrementar = createAction('[Contador] Decrementar');

export const multiplicar = createAction(
  '[Contador] Multiplicar',
  props<{ numero: number }>() // con esta función indicamos lo que puede recibir la acción y la variable y tipo de la misma es recomendado hacerlo así para no dejarla generica
);
export const dividir = createAction(
  '[Contador] Dividir',
  props<{ numero: number }>()
);

export const reset = createAction('[Counter Component] Reset');
