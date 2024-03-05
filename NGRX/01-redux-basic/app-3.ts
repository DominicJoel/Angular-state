import { Reducer, Action } from "./ngrx-fake/ngrx";
import { contadorReducer } from "./contador/contador.reducer";
import {
  incrementadoAction,
  multiplicarAction,
} from "./contador/contador.actions";
// STORE

class Store<T> {
  //private state: T;

  constructor(private reducer: Reducer<T>, private state: T) {
    // this.state = state;
  }

  getState() {
    //Como el state es una propiedad privada necesitamos una función para acceder al estado
    return this.state;
  }

  dispatch(action: Action) {
    // El dispatch lo que hace es que ejecuta la acción con el reducer
    this.state = this.reducer(this.state, action);
  }
}

const store = new Store(contadorReducer, 10);

console.log(store.getState());

// Sin parentesis contadorReducer es la definición si se lo ponemos la estamos ejecutando contadorReducer()

store.dispatch(incrementadoAction);
console.log(store.getState());

store.dispatch(multiplicarAction); //22 es esa cantidad porque mantiene el estado
console.log(store.getState());
