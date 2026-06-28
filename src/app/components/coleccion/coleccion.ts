import { Component, OnInit } from '@angular/core';
import { Moneda } from '../../card-moneda/card-moneda'; // Importamos tu interfaz

@Component({
  selector: 'app-coleccion',
  templateUrl: './coleccion.html',
  styleUrls: ['./coleccion.scss'],
  standalone: false
})
export class ColeccionComponent implements OnInit {
  misMonedas: Moneda[] = [];

  constructor() { }

  ngOnInit(): void {
    this.misMonedas = [
      {
        nombre: 'Solidus Bizantino',
        pais: 'Imperio Bizantino',
        emisor: 'Justiniano I',
        epoca: 'Siglo VI',
        peso: '4.2g',
        denominacion: 'Solidus',
        diametro: '20mm',
        metal: 'Oro',
        conservacion: 'S',
        notas: 'Excelente pieza',
        imagenUrl: 'moneda.png',
        precio: 2500
      }
    ];
  }
}