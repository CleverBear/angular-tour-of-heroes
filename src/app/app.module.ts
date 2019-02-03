import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopHeroesComponent } from './top-heroes/top-heroes.component';
import { MyheroesComponent } from './myheroes/myheroes.component';
import { EditheroesComponent } from './editheroes/editheroes.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeroesComponent,
    MyheroesComponent,
    EditheroesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
