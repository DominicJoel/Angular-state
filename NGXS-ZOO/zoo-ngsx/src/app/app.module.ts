import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ZooComponent } from "./zoo/zoo.component";
import { NgxsModule } from "@ngxs/store";
import { ZooSelectComponent } from './zoo-select/zoo-select.component';

@NgModule({
  declarations: [AppComponent, ZooComponent, ZooSelectComponent],
  imports: [BrowserModule, NgxsModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
