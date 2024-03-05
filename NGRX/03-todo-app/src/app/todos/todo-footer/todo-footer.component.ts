import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { setFiltro } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  filtroActual: string = 'todos';
  filtros: string[] = ['todos', 'completados', 'pendientes'];
  pendientes: number = 0;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    // this.store.select('filtro').subscribe((filtro) => {
    //   this.filtroActual = filtro;
    // });

    this.store.subscribe((state) => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter((todo) => !todo.completed).length;
    });
  }

  cambiarFiltro(filtro: any) {
    console.log(filtro);
    this.store.dispatch(setFiltro({ filtro }));
  }
}
