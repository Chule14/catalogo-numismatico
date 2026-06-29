import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo';
import { ColeccionComponent } from './pages/coleccion/coleccion';

const routes: Routes = [
  { path: '', component: CatalogoComponent },
  { path: 'coleccion', component: ColeccionComponent } // Nueva ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }