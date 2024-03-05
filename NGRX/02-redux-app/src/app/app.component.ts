import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementar, decrementar } from './contador/contador.action';
import { AppState } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  contador: number = 10;

  constructor(private store: Store<AppState>) {
    //Servicio que viene de la libreria de NGRX (store:Store)
    // this.contador = 10; Manual

    this.store.subscribe((state) => {
      console.log(state);
      this.contador = state.contador;
    });
  }

  incrementar() {
    // this.contador++; Manual
    this.store.dispatch(incrementar());
  }
  decrementar() {
    this.store.dispatch(decrementar());
    //this.contador--; Manual
  }
}

// https://ngrx.io/guide/store/install
// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
// https://ngrx.io/guide/store-devtools/install
