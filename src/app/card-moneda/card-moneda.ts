import { Component, Input } from '@angular/core';


export interface Moneda {
  pais: string;
  emisor: string;
  epoca: string;
  peso: string;
  conservacion: string;
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
}