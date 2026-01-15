import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss']
})
export class StorePage {

  productos = [
    { nombre: 'Chaqueta Oversize', precio: 45, img: 'assets/img/prod1.jpg' },
    { nombre: 'Hoodie Street', precio: 35, img: 'assets/img/prod2.jpg' },
    { nombre: 'Pantalón Cargo', precio: 40, img: 'assets/img/prod3.jpg' },
    { nombre: 'Camiseta Urban', precio: 25, img: 'assets/img/prod4.jpg' },
    { nombre: 'Gorra Unisex', precio: 15, img: 'assets/img/prod5.jpg' },
    { nombre: 'Bolso Street', precio: 30, img: 'assets/img/prod6.jpg' }
  ];
}
