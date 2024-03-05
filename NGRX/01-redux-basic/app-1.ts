// aCCIONES
interface Action {
  type: string;
  payload?: any;
}

// const incrementadoAction: Action = {
//   type: "INCREMENTAR",
// };

// rEDUCER: Recibe el oldstate y la accion y retorna el nuevo estado

function reducer(state = 10, action: Action) {
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
    default:
      return state;
  }
  // return state; //Regla del reducer : siempre regresa un estado aunque no se haga nada dentro del reducer debe devolver un estado
}

// Usar el reducer

const incrementadoAction: Action = {
  type: "INCREMENTAR",
};

console.log(reducer(10, incrementadoAction));

const decrementadoAction: Action = {
  type: "DECREMENTAR",
};

console.log(reducer(10, decrementadoAction));

const multiplicarAction: Action = {
  type: "MULTIPLICAR",
  payload: 2,
};

console.log(reducer(10, multiplicarAction));

const dividirAction: Action = {
  type: "DIVIDIR",
  payload: 2,
};

console.log(reducer(10, dividirAction));
