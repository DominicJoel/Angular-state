// Actions: Class describing the action to take and its associated metadata

export class AddAnimal {
  static readonly type = "[Zoo] Add Animal";
  constructor(public name: string) {}
}

export class FeedAnimals {
  static readonly type = "[Zoo] Feed Animals";
}

// Often you need an action to have some data associated with it. Here we have an action that should trigger feeding a zebra with hay.
// The name field of the action class will represent the name of the zebra we should feed. The hayAmount tells us how many kilos of hay the zebra should get.
export class FeedZebra {
  static readonly type = "[Zoo] Feed Zebra";
  constructor(public name: string, public hayAmount: number) {}
}

// How should you name your actions?
// Commands
// Commands are actions that tell your app to do something. They are usually triggered by user events such as clicking on a button, or selecting something.
// Names should contain three parts:
// - A context as to where the command came from, [User API], [Product Page], [Dashboard Page].
// - A verb describing what we want to do with the entity.
// - The entity we are acting upon, User, Card, Project.
// Examples:
// 1-[User API] GetUser
// 2-[Product Page] AddItemToCart
// 3-[Dashboard Page] ArchiveProject

// -- Event examples
// Events are actions that have already happened and we now need to react to them.
// The same naming conventions apply as commands, but they should always be in the past tense.
// By using API in the context part of the action name we know that this event was fired because of an async action to an API.
// Actions are normally dispatched from container components such as router pages. By having explicit actions for each page, it's also easier to track where an event came from.
// Examples:
// [User API] GetUserSuccess
// [Project API] ProjectUpdateFailed
// [User Details Page] PasswordChanged
// [Project Stars Component] StarsUpdated
