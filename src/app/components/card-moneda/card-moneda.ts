import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Moneda {
  nombre: string;
  pais: string;
  emisor: string;
  epoca: string;
  peso: string;
  denominacion: string;
  diametro: string;
  metal: string;
  notas: string;
  conservacion: string;
  precio: number;
  imagenUrl: string;
}

@Component({
  selector: 'app-card-moneda',
  templateUrl: './card-moneda.html',
  styleUrls: ['./card-moneda.scss'],
  standalone: false
})
export class CardMonedaComponent {
  @Input() moneda!: Moneda;
  
  
  @Input() esColeccion: boolean = false; 

  @Output() agregar = new EventEmitter<Moneda>();
  @Output() eliminar = new EventEmitter<Moneda>();

  onAgregar() {
    this.agregar.emit(this.moneda);
  }

  onEliminar() {
    this.eliminar.emit(this.moneda);
  }
}