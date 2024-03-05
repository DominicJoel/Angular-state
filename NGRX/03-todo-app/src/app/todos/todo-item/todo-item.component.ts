import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todo;
  @ViewChild('inputFisico') txtFisico!: ElementRef; //Saca la relacion al native element

  chkCompleted!: FormControl;
  textInput!: FormControl;
  editing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, Validators.required);

    this.chkCompleted.valueChanges.subscribe((value) => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  edit() {
    this.editing = true;
    this.textInput.setValue(this.todo.text);

    setTimeout(() => {
      this.txtFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editing = false;

    if (this.textInput.invalid) {
      return;
    }
    if (this.textInput.value === this.todo.text) {
      return;
    }
    this.store.dispatch(
      actions.editar({ id: this.todo.id, text: this.textInput.value })
    );
  }

  delete() {
    this.store.dispatch(actions.borrar({ id: this.todo.id }));
  }
}
