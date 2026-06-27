import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.scss'],
  standalone: false
})
export class CatalogoComponent {
  moneda = {
    nombre: 'Denariio de Julio César',
    epoca: 'Imperio Romano',
    precio: 1200,
    estado: 'EBC (Extremadamente Bien Conservada)',
    imagen: 'public/coin.png',
  };
}