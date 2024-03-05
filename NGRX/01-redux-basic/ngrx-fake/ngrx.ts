// aCCIONES
export interface Action {
  type: string;
  payload?: any;
}

export interface Reducer<T> {
  (state: T, action: Action): T; //El reducer es una funcion y esta siempre va a retornar el mismo estado
}
