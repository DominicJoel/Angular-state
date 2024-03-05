import { Action } from "../ngrx-fake/ngrx";
// Es buena practica colocar el action si es una acción en el nombre del archivo contador.action.ts

export const incrementadoAction: Action = {
  type: "INCREMENTAR",
};

export const decrementadoAction: Action = {
  type: "DECREMENTAR",
};

export const multiplicarAction: Action = {
  type: "MULTIPLICAR",
  payload: 2,
};

export const dividirAction: Action = {
  type: "DIVIDIR",
  payload: 2,
};

export const resetAction: Action = {
  type: "RESET",
};
