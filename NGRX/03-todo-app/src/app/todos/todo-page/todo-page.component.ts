import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent {
  completed: boolean = false;

  constructor(private store: Store<AppState>) {}

  toggleAll() {
    this.completed = !this.completed;
    this.store.dispatch(actions.seleccionarTodo({ selected: this.completed }));
  }
}
