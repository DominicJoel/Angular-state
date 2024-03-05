// Memoized Selectors

// Oftentimes you will use the same selectors in several different places or have complex
// selectors you want to keep separate from your component. NGXS has a @Selector
//decorator that will help us with that. This decorator will memoize the function for
// performance as well as automatically slice the state portion you are dealing with.

// Let's create a selector that will return a list of pandas from the animals.

import { Injectable } from "@angular/core";
import { State, Selector, createSelector } from "@ngxs/store";

@State<string[]>({
  name: "animals",
  defaults: [],
})
@Injectable()
export class ZooState {
  @Selector()
  static pandas(state: string[]) {
    return state.filter((s) => s.indexOf("panda") > -1);
  }

  // Lazy Selectors
  // To create a lazy selector all that you need to do is return a function from the selector. The function returned by the selector will be memoized automatically and the logic inside this function will be evaluated at
  //a later stage when the consumer of the selector executes the function. Note that this function can take any number of arguments (or zero arguments) as it is the consumer's responsibility to supply them.
  @Selector()
  static pandasLazy(state: string[]) {
    return (type: string) => {
      return state
        .filter((s) => s.indexOf("panda") > -1)
        .filter((s) => s.indexOf(type) > -1);
    };
  }

  // Dynamic Selectors
  // A dynamic selector is created by using the createSelector function as opposed to the @Selector decorator. It does not need to be created in any special area at any specific time. The typical use case though would be to create a selector that looks like a normal selector but takes an argument to provide to the dynamic selector.
  static pandasDynamic(type: string) {
    return createSelector([ZooState], (state: string[]) => {
      return state
        .filter((s) => s.indexOf("panda") > -1)
        .filter((s) => s.indexOf(type) > -1);
    });
  }
}
