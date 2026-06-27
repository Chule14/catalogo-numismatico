import { Component } from '@angular/core';
import { Moneda } from '../card-moneda/card-moneda';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.scss'],
  standalone: false
})
export class CatalogoComponent {
  // Asegúrate de usar el nombre "monedas" aquí
  monedas: Moneda[] = [
    {
      pais: 'Imperio Romano',
      emisor: 'Julio César',
      epoca: '44 a.C.',
      peso: '3.9g',
      conservacion: 'EBC',
      imagenUrl: 'moneda.png',
      precio: 1200
    },
    {
      pais: 'reino bizantino',
      emisor: 'alejandro magno',
      epoca: '44 a.C.',
      peso: '3.9g',
      conservacion: 'B+',
      imagenUrl: 'moneda.png',
      precio: 1200
    }
  ];
}