// Inheriting Selectors

// When we have states that share similar structure, we can extract the shared selectors into a base class which we can later extend from.
// If we have an entities field on multiple states, we can create a base class containing a dynamic @Selector() for that field, and extend from it on the @State classes like this.

import { Injectable } from "@angular/core";
import { createSelector, State } from "@ngxs/store";

export class EntitiesState {
  static entities<T>() {
    return createSelector([this], (state: { entities: T[] }) => {
      return state.entities;
    });
  }

  //...
}

///////////////////////// State User /////////////////////////////////

export interface User {
  name: string;
  age: string;
  adrress: string;
}

export interface UsersStateModel {
  entities: User[];
}

@State<UsersStateModel>({
  name: "users",
  defaults: {
    entities: [],
  },
})
@Injectable()
export class UsersState extends EntitiesState {
  //...
}

///////////////////////// State Product /////////////////////////////////

export interface Product {
  name: string;
  price: number;
}

export interface ProductsStateModel {
  entities: Product[];
}

@State<ProductsStateModel>({
  name: "products",
  defaults: {
    entities: [],
  },
})
@Injectable()
export class ProductsState extends EntitiesState {
  //...
}
