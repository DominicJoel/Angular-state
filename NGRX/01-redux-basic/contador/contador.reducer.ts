import { Action } from "../ngrx-fake/ngrx";

export function contadorReducer(state = 10, action: Action) {
  // OJO : eL REDUCER ES una función pura así que no debemos usar cosas externas como http dentro de ella, todo se debe resolver con el estado y la acción que recibe --//
  //   if (action.type === "INCREMENTAR") {
  //     return (state += 1);
  //   }

  //----------- Usualmente lo que usamos es switch en vez de if ---

  switch (action.type) {
    case "INCREMENTAR":
      return (state += 1);
    case "DECREMENTAR":
      return (state -= 1);
    case "MULTIPLICAR":
      return state * action.payload;
    case "DIVIDIR":
      return state / action.payload;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
  // return state; //Regla del reducer : siempre regresa un estado aunque no se haga nada dentro del reducer debe devolver un estado
}
