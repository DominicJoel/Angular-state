// States are classes along with decorators to describe metadata and action mappings. To define a state container,
// let's create an ES2015 class and decorate it with the State decorator.
import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";

@State<string[]>({
  name: "animals",
  defaults: [],
})
@Injectable()
export class AnimalsState {}

// In the state decorator, we define some metadata about the state. These options include:
// - name: The name of the state slice. Note: The name is a required parameter and must be unique for the entire application.
// - Names must be object property safe, (e.g. no dashes, dots, etc).
// - defaults: Default set of object/array for this state slice.
// - children: Child sub state associations.
