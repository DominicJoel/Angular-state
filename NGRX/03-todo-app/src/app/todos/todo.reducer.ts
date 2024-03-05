import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, toggle, editar, borrar, seleccionarTodo } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de Ironman'),
  new Todo('Robar escuro de Capitan america'),
];

export const _todoReducer = createReducer(
  initialState,
  on(crear, (state, { text }) => [...state, new Todo(text)]),

  on(borrar, (state, { id }) => state.filter((todo) => todo.id !== id)),

  on(toggle, (state, { id }) => {
    // Usamos el map porque crea un nuevo arreglo, por eso lo utilizamos , si no crea uno nuevo y lo que hace es que manipula el actual no es recomendable para los etsados
    return state.map((todo) => {
      if (todo.id == id) {
        return {
          //Para regresar un nuevo objeto
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    }); // Siempre pero siempre debemos retornar el state, y siempre el estado deb ser nuevo, no debo manipular el actual
  }),

  on(seleccionarTodo, (state, { selected }) => {
    // Usamos el map porque crea un nuevo arreglo, por eso lo utilizamos , si no crea uno nuevo y lo que hace es que manipula el actual no es recomendable para los etsados
    return state.map((todo) => {
      return {
        //Para regresar un nuevo objeto
        ...todo,
        completed: selected,
      };
    }); // Siempre pero siempre debemos retornar el state, y siempre el estado deb ser nuevo, no debo manipular el actual
  }),

  on(editar, (state, { id, text }) => {
    // Usamos el map porque crea un nuevo arreglo, por eso lo utilizamos , si no crea uno nuevo y lo que hace es que manipula el actual no es recomendable para los etsados
    return state.map((todo) => {
      if (todo.id == id) {
        return {
          //Para regresar un nuevo objeto
          ...todo,
          text: text,
        };
      } else {
        return todo;
      }
    }); // Siempre pero siempre debemos retornar el state, y siempre el estado deb ser nuevo, no debo manipular el actual
  })
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}

///[...state, new Todo(text)] retorna un nuevo arreglo
/// ... para extraerlo de manera independiente
// new Todo(text) el nuevo estado

// Nota, al menos que sea un valor primitivo , debemos cuidarnos de mutar, mas bien tenemo que retornar un nuevo estado
