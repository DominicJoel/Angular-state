// here we group similar actions into the Todo namespace. In this case just import namespace instead of multiple action classes in same file.

export namespace Todo {
  export class Add {
    static readonly type = "[Todo] Add";
    constructor(public payload: any) {}
  }

  export class Edit {
    static readonly type = "[Todo] Edit";
    constructor(public payload: any) {}
  }

  export class FetchAll {
    static readonly type = "[Todo] Fetch All";
  }

  export class Delete {
    static readonly type = "[Todo] Delete";
    constructor(public id: number) {}
  }
}
