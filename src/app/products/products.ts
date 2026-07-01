import { Component, computed, inject, signal } from '@angular/core';
import { Cardproduct } from '../cardproduct/cardproduct';
import { Cart } from '../services/cart';
import { DecimalPipe } from '@angular/common';

export interface Producto {
  id: number;
  title: string;
  descripcion: string;
  precio: number;
  img: string;
  // en_oferta: boolean;
  subcategoria: {
    nombre: string;
  };
  generos: {
    nombre: string;
  }[];
  plataformas: string;
  descuento_porcentaje: number;
  // precio_final: number;
  stock: number;
}

@Component({
  selector: 'app-products',
  imports: [Cardproduct, DecimalPipe],
  templateUrl: './products.html',
})
export class Products {
  cartService = inject(Cart);

  cantidad = signal<number>(0);
  total = signal<number>(0);

  agregarAlCarrito(item: any){
    console.log('Producto recibido en catálogo:', item);
    this.cantidad.update(i => i + item.cantidad);
    this.total.update(i => i + item.total);
    console.log('Total: $' + this.total());
  }

  listaProductos: Producto[] = [
    {
      id: 1,
      title: 'Resident Evil Requiem',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      precio: 35000,
      img: 'https://image.api.playstation.com/pr/bam-art/227/344/776803f4-0dc0-45bf-a4a3-9a71fff6d65e.jpg',
      subcategoria: {
        nombre: 'PS5',
      },
      generos: [
        {nombre: 'Acción'},
        {nombre: 'Aventura'},
      ],
      plataformas: 'PlayStation',
      descuento_porcentaje: 5,
      stock: 0,
    },
    {
      id: 2,
      title: 'EA FC 26',
      descripcion: 'EA FC 26',
      precio: 50000,
      img: 'https://image.api.playstation.com/vulcan/ap/rnd/202507/2511/19ad6574090b6a71c88f0e6152ae5a668cc85882d87c51b5.png',
      subcategoria: {
        nombre: 'PS5',
      },
      generos: [
        {nombre: 'Deportes'},
      ],
      plataformas: 'PS5',
      descuento_porcentaje: 20,
      stock: 10,
    },
    {
      id: 3,
      title: 'NBA 2K26',
      descripcion: 'NBA 2K26',
      precio: 25000,
      img: 'https://image.api.playstation.com/pr/bam-art/216/823/4acb28cc-560a-4a05-a81f-d8f409ac0267.jpg',
      subcategoria: {
        nombre: 'PS5',
      },
      generos: [
        {nombre: 'Deportes'},
      ],
      plataformas: 'Nintendo',
      descuento_porcentaje: 10,
      // precio_final:0,
      stock: 5,
    },
    {
      id: 4,
      title: 'Call Of Duty Modern Warfare 4',
      descripcion: 'Call Of Duty Modern Warfare 4',
      precio: 30000,
      img: 'https://image.api.playstation.com/vulcan/ap/rnd/202605/1419/39e532d5d5a31d9113c7fa8f3e4c332af9428613efe01037.png',
      subcategoria: {
        nombre: 'PS4',
      },
      generos: [
        {nombre: 'Acción'},
        {nombre: 'Aventura'},
      ],
      plataformas: 'PlayStation',
      // precio_final:0,
      descuento_porcentaje: 5,
      stock: 15,
    },
  ];

  onAgregarAlCarrito(item: any): void {
    this.cartService.addToCart(item);
  }
}
