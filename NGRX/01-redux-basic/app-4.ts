// Utilizando la libreria de redux
import { createStore, Store } from "redux";
import { contadorReducer } from "./contador/contador.reducer";
import { incrementadoAction } from "./contador/contador.actions";

const store: Store = createStore(contadorReducer);

//subscribirnos al store
store.subscribe(() => {
  console.log("subs:", store.getState());
});

store.dispatch(incrementadoAction);
store.dispatch(incrementadoAction);
store.dispatch(incrementadoAction);
store.dispatch(incrementadoAction);
store.dispatch(incrementadoAction);
store.dispatch(incrementadoAction);
