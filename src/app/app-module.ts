import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CatalogoComponent } from './catalogo/catalogo';
import { CardMonedaComponent } from './card-moneda/card-moneda';
@NgModule({
  declarations: [
    App,
    CatalogoComponent,
    CardMonedaComponent 
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