// Select

// Selects are functions that slice a specific portion of state from the global state container.

import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { ZooStateModel } from "../../state/actions/states/FeedAnimalsAsync.state";
import { Observable } from "rxjs";

import { ZooState } from "../../state/actions/states/zooSelector.state";
import { map } from "rxjs/operators";
import {
  Product,
  ProductsState,
  User,
  UsersState,
} from "../../state/actions/states/entities.state";

@Component({
  selector: "app-zoo-select",
  templateUrl: "./zoo-select.component.html",
  styleUrls: ["./zoo-select.component.css"],
})
export class ZooSelectComponent implements OnInit {
  // You can select slices of data from the store using the @Select decorator. It has a few different ways to get your data out,
  // whether passing the state class, a function, a different state class or a memoized selector.

  // Reads the name of the state from the state class
  @Select(ZooState) animals$: Observable<string[]>;

  // Uses the pandas memoized selector to only return pandas
  @Select(ZooState.pandas) pandas$: Observable<string[]>;

  // Also accepts a function like our select method
  @Select((state) => state.zoo.animals) animals2$: Observable<string[]>;

  // Reads the name of the state from the parameter
  @Select() zoo$: Observable<ZooStateModel>;

  animals3$: Observable<string[]>;
  babyPandas$: Observable<string[]>; // For the lazy selector

  // Dynamic selectors
  // Note that each of these selectors have their own separate memoization. Even if two dynamic selectors created in this way are provided the same argument, they will have separate memoization.
  @Select(ZooState.pandasDynamic("baby"))
  babyPandasDynamic$: Observable<string[]>;

  @Select(ZooState.pandasDynamic("adult"))
  adultPandasDynamic$: Observable<string[]>;

  // Inheriting Selectors

  @Select(UsersState.entities<User>())
  users$: Observable<User[]>;

  @Select(ProductsState.entities<Product>())
  products$: Observable<Product[]>;

  constructor(private store: Store) {
    // This is most helpful to programmatic selects where we can't statically declare them with the select decorator.
    this.animals$ = this.store.select((state) => state.zoo.animals);

    // FilTEr WiTh ArGumEnTS and selector lazy selectors

    this.babyPandas$ = this.store
      .select(ZooState.pandasLazy)
      .pipe(map((filterFn) => filterFn("baby")));

    //Anpther way to use Inheriting Selectors
    this.store.select(UsersState.entities<User>());
  }

  ngOnInit() {}
}
