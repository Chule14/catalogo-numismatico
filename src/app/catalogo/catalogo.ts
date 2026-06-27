
import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.scss'],
  standalone: false
})
export class CatalogoComponent {
  moneda: any = { 
    nombre: 'Denario de Julio César',
    epoca: 'Imperio Romano',
    precio: 1200,
    estado: 'EBC',
    imagen: 'coin.png',
  };
}

 
