import { createReducer, on } from '@ngrx/store';
import { reset } from './contador.action';
import {
  incrementar,
  decrementar,
  multiplicar,
  dividir,
} from './contador.action';

// export function contadorReducer(state: number = 10, action: Action) {
//   switch (action.type) {
//     case incrementar.type:
//       return state + 1;
//     case decrementar.type:
//       return state - 1;
//     default:
//       return state;
//   }
// }

export const initialState = 20;

// De esta forma lo hacemos con funciones de ngrx
// initialState - Estado antiguo
// on (La acción que mandamos la identifica)
export const contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1), // on es de ngrx que nos ayuda a seleccionar mas rapido la acción que queremos
  on(decrementar, (state) => state - 1),
  on(reset, (state) => initialState),
  on(multiplicar, (state, { numero }) => state * numero), //Así recibimos el valor que tiene el prop, aquí lo estamos desestructurizando
  on(dividir, (state, { numero }) => state / numero) //Así recibimos el valor que tiene el prop, aquí lo estamos desestructurizando
);

// NOTA: Recordar que el reducer es autonomo solo trabaja con lo que se le envia no hace peticiones externas
