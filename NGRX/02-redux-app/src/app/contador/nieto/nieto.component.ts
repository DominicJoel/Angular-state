import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { reset } from '../contador.action';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
})
export class NietoComponent implements OnInit {
  // @Input() contador: number = 0;
  // @Output() cambioContador = new EventEmitter<number>();
  contador!: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // Al que queremos estar pendiente que es al contador
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }
  reset() {
    // this.contador = 0;
    // this.cambioContador.emit(0);
    this.store.dispatch(reset());
  }
}
