import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { LucideArrowRight, LucideShoppingCart } from '@lucide/angular';

export interface Producto {
  nombre: string;
  precio: number;
  stock: number;
}

export interface listProducts {
  id: number;
  title: string;
  descripcion: string;
  precio: number;
  img: string;
}


@Component({
  selector: 'app-directivas',
  imports: [NgClass, LucideArrowRight, LucideShoppingCart],
  templateUrl: './directivas.html',
})
export class Directivas {
  isLogged: boolean = false;
  nombre: string = 'Usuario';
  productos: any[] = [
    {id: 1, nombre: 'PS5', precio: 1000},
    {id: 2, nombre: 'Xbox', precio: 500},
    {id: 3, nombre: 'Nintendo', precio: 250}
  ];
  misProductos: Producto[] = [
    {nombre: 'PS5', precio: 1000, stock: 5},
    {nombre: 'Xbox', precio: 500, stock: 3},
    {nombre: 'Nintendo', precio: 250, stock: 2}
  ];


  listaProductos: listProducts[] = [
    {id: 1, title: 'PS5', descripcion: 'PlayStation 5', precio: 1200000, img: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$'},
    {id: 2, title: 'Xbox', descripcion: 'Microsoft Xbox Series X', precio: 1100000, img: 'https://cms-assets.xboxservices.com/assets/bc/40/bc40fdf3-85a6-4c36-af92-dca2d36fc7e5.png?n=642227_Hero-Gallery-0_A1_857x676.png'},
    {id: 3, title: 'Nintendo', descripcion: 'Nintendo Switch', precio: 800000, img: 'https://assets.nintendo.com/image/upload/q_auto:best/f_auto/c_fill,w_1025/dpr_2.0/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/animation-features-hero/m-features-switch'},
    {id: 4, title: 'Call Of Duty Modern Warfare 4', descripcion: 'Call Of Duty Modern Warfare 4', precio: 60000, img: 'https://image.api.playstation.com/vulcan/ap/rnd/202605/1419/39e532d5d5a31d9113c7fa8f3e4c332af9428613efe01037.png'}
  ];


}
