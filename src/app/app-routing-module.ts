import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo';
import { ColeccionComponent } from './components/coleccion/coleccion';

const routes: Routes = [
  { path: '', component: CatalogoComponent },
  { path: 'coleccion', component: ColeccionComponent } // Nueva ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }