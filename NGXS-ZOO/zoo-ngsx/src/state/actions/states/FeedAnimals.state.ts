// Simple Actions
// Let's define a state that will listen to a FeedAnimals action to toggle whether the animals have been fed:

import { Injectable } from "@angular/core";
import { State, Action, StateContext } from "@ngxs/store";

export class FeedAnimals {
  //action
  static readonly type = "[Zoo] FeedAnimals";
}

export interface ZooStateModel {
  //model
  feed: boolean;
}

@State<ZooStateModel>({
  //State
  name: "zoo",
  defaults: {
    feed: false,
  },
})
@Injectable()
export class ZooState {
  @Action(FeedAnimals)
  feedAnimals(ctx: StateContext<ZooStateModel>) {
    const state = ctx.getState(); // The feedAnimals function has one argument called ctx with a type of StateContext<ZooStateModel>. This context state has a slice pointer and a function exposed to set the state. It's important to note that the getState() method will always return the freshest state slice from the global store each time it is accessed. This ensures that when we're performing async operations the state is always fresh. If you want a snapshot, you can always clone the state in the method.
    ctx.setState({
      ...state,
      feed: !state.feed,
    });
  }
}
