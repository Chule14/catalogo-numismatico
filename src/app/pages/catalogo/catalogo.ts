import { Component } from '@angular/core';
import { Moneda } from '../../components/card-moneda/card-moneda';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.scss'],
  standalone: false
})
export class CatalogoComponent {
  monedas: Moneda[] = [
    {
      nombre: 'Denario de Julio César', // ¡Faltaba!
      pais: 'Imperio Romano',
      emisor: 'Julio César',
      epoca: '44 a.C.',
      peso: '3.9g',
      denominacion: 'Denario', // ¡Faltaba!
      diametro: '18mm', // ¡Faltaba!
      metal: 'Plata', // ¡Faltaba!
      notas: 'Histórica', // ¡Faltaba!
      conservacion: 'EBC',
      imagenUrl: 'moneda.png',
      precio: 1200
    },
    {
      nombre: 'Tetradracma de Alejandro', // ¡Faltaba!
      pais: 'Reino Bizantino',
      emisor: 'Alejandro Magno',
      epoca: '330 a.C.',
      peso: '17.2g',
      denominacion: 'Tetradracma',
      diametro: '25mm',
      metal: 'Plata',
      notas: 'Acuñación póstuma',
      conservacion: 'B+',
      imagenUrl: 'moneda.png',
      precio: 1200
    }
  ];

  guardarMoneda(moneda: Moneda) {
    // Leemos si ya hay monedas guardadas (o creamos un array vacío)
    let coleccionActual = JSON.parse(localStorage.getItem('misMonedas') || '[]');
    // Agregamos la nueva moneda
    coleccionActual.push(moneda);
    // Guardamos todo de nuevo
    localStorage.setItem('misMonedas', JSON.stringify(coleccionActual));
    
    alert(`¡${moneda.nombre} agregada a tu colección personal!`);
  }
}