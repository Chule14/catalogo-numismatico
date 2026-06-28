import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CatalogoComponent } from './catalogo/catalogo';
import { CardMonedaComponent } from './card-moneda/card-moneda';

import { Menu } from './components/menu/menu';
import { ColeccionComponent } from './components/coleccion/coleccion';

@NgModule({
  declarations: [
    App,
    CatalogoComponent,
    CardMonedaComponent,
    Menu, 
    ColeccionComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [App]
})
export class AppModule { }