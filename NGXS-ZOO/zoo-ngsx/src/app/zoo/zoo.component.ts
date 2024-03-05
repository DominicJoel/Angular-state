// Dispatching actions
// To dispatch actions, you need to inject the Store service into your component/service and invoke the dispatch function with an action or an array of actions you wish to trigger.

import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { withLatestFrom } from "rxjs/operators";
import { AddAnimal } from "../../state/actions/animal.actions";

@Component({
  selector: "app-zoo",
  templateUrl: "./zoo.component.html",
  styleUrls: ["./zoo.component.css"],
})
export class ZooComponent implements OnInit {
  form: FormGroup;
  @Select((state) => state.animals) animals$: Observable<any>; // Para manejar el estado y reconocer la forma en la que viene. State slice selectors

  constructor(private store: Store) {}

  ngOnInit() {}

  addAnimal(name: string) {
    // Dispatching actions
    this.store.dispatch(new AddAnimal(name));

    // You can also dispatch multiple actions at the same time by passing an array of actions like:
    // this.store.dispatch([new AddAnimal('Panda'), new AddAnimal('Zebra')]);
  }

  // addAnimal(name: string){
  // Let's say after the action executes you want to clear the form. Our dispatch function actually returns an Observable, so we can subscribe to it and reset the form after it was successful.
  //   this.store.dispatch(new AddAnimal(name)).subscribe(() => this.form.reset());
  // }

  addAnimalObservable(name: string) {
    // The Observable that a dispatch returns has a void type, this is because there can be multiple states that listen to the same @Action, therefore it's not realistically possible to return the state from these actions since we don't know the form of them.
    // If you need to get the state after this, simply use a @Select in the chain like:

    this.store
      .dispatch(new AddAnimal(name))
      .pipe(withLatestFrom(this.animals$))
      .subscribe(([_, animal]) => {
        // Do something with animal
        this.form.reset();
      });
  }
}

// Snapshots: You can get a snapshot of the state by calling store.snapshot(). This will return the entire value of the store for that point in time.
