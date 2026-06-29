import { Component, OnInit } from '@angular/core';
import { Moneda } from '../../components/card-moneda/card-moneda';

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
    const monedasGuardadas = localStorage.getItem('misMonedas');
    
    if (monedasGuardadas) {
      this.misMonedas = JSON.parse(monedasGuardadas);
    }
  }
  eliminarMoneda(monedaAEliminar: Moneda) {
    this.misMonedas = this.misMonedas.filter(m => m.nombre !== monedaAEliminar.nombre);
    localStorage.setItem('misMonedas', JSON.stringify(this.misMonedas));
  }
}