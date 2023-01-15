import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SnakeLadderComponent } from './snake-ladder/snake-ladder.component';
import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    SnakeLadderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,SnakeLadderComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const el = createCustomElement(SnakeLadderComponent, { injector });
        customElements.define('snake-ladder-widget', el);
  }
  ngDoBootstrap() {}
}
