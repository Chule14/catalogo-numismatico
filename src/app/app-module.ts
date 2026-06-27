import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CatalogoComponent } from './catalogo/catalogo';
import { CardMonedaComponent } from './card-moneda/card-moneda';
import { Menu } from './components/menu/menu';
@NgModule({
  declarations: [
    App,
    CatalogoComponent,
    CardMonedaComponent,
    Menu 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }