import { Injectable } from "@angular/core";
import { State, Action, StateContext } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { AnimalService } from "../../../app/service/animal.service";

export class FeedAnimals {
  static readonly type = "[Zoo] FeedAnimals";
  constructor(public animalsToFeed: string) {}
}

export interface ZooStateModel {
  feedAnimals: string[];
}

@State<ZooStateModel>({
  name: "zoo",
  defaults: {
    feedAnimals: [],
  },
})
@Injectable()
export class ZooState {
  constructor(private animalService: AnimalService) {}

  @Action(FeedAnimals) //With Observable
  feedAnimals(ctx: StateContext<ZooStateModel>, action: FeedAnimals) {
    return this.animalService.feed(action.animalsToFeed).pipe(
      tap((animalsToFeedResult) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          feedAnimals: [...state.feedAnimals, animalsToFeedResult],
        });
      })
    );
  }

  // Observables are not a requirement, you can use promises too. We could swap that observable chain to look like this:

  //   @Action(FeedAnimals) //With Promise
  //   async feedAnimals2(ctx: StateContext<ZooStateModel>, action: FeedAnimals) {
  //     const result = await this.animalService.feedAsync(action.animalsToFeed);
  //     const state = ctx.getState();
  //     ctx.setState({
  //       ...state,
  //       feedAnimals: [...state.feedAnimals, result]
  //     });
}

// Dispatching Actions From Actions

//If you want your action to dispatch another action,
// you can use the dispatch function that is contained in the state context object.

//  /**
//    * Simple Example
//    */
//   @Action(FeedAnimals)
//   feedAnimals(ctx: StateContext<ZooStateModel>, action: FeedAnimals) {
//     const state = ctx.getState();
//     ctx.setState({
//       ...state,
//       feedAnimals: [...state.feedAnimals, action.animalsToFeed]
//     });

//     return ctx.dispatch(new TakeAnimalsOutside());
//   }

//   /**
//    * Async Example
//    */
//   @Action(FeedAnimals)
//   feedAnimals2(ctx: StateContext<ZooStateModel>, action: FeedAnimals) {
//     return this.animalService.feed(action.animalsToFeed).pipe(
//       tap(animalsToFeedResult => {
//         const state = ctx.getState();
//         ctx.patchState({
//           feedAnimals: [...state.feedAnimals, animalsToFeedResult]
//         });
//       }),
//       mergeMap(() => ctx.dispatch(new TakeAnimalsOutside()))
//     );
//   }
