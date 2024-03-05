import { Injectable } from "@angular/core";
import { State, Action, StateContext } from "@ngxs/store";

// This is an interface that is part of your domain model
export interface ZebraFood {
  name: string;
  hay: number;
  carrots: number;
}

// naming your action metadata explicitly makes it easier to understand what the action
// is for and makes debugging easier.
export class FeedZebra {
  static readonly type = "[Zoo] FeedZebra";
  constructor(public zebraToFeed: ZebraFood) {}
}

export interface ZooStateModel {
  zebraFood: ZebraFood[];
}

@State<ZooStateModel>({
  name: "zoo", // This name must be unique
  defaults: {
    zebraFood: [], // Initilize de state
  },
})
@Injectable()
export class ZooState {
  //   @Action(FeedZebra) // -- The long way to it--
  //   feedZebra(ctx: StateContext<ZooStateModel>, action: FeedZebra) {
  //     const state = ctx.getState();
  //     ctx.setState({
  //       ...state,
  //       zebraFood: [
  //         ...state.zebraFood,
  //         // this is the new ZebraFood instance that we add to the state
  //         action.zebraToFeed,
  //       ],
  //     });
  //   }

  @Action(FeedZebra) // -- The short way to do it --
  feedZebra(ctx: StateContext<ZooStateModel>, action: FeedZebra) {
    const state = ctx.getState();
    ctx.patchState({
      zebraFood: [...state.zebraFood, action.zebraToFeed],
    });
  }
}
