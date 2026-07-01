import { DecimalPipe } from '@angular/common';
import { Component, computed, effect, input, output, signal } from '@angular/core';
import { LucideShoppingCart, LucideStar } from '@lucide/angular';
import { Producto } from '../products/products';
// import { Carrito } from '../carrito/carrito';

interface Carrito {
  title: string;
  precio: number;
  img: string;
  id: number;
  precio_oferta: number;
  cantidad: number;
  total: number;
}

@Component({
  selector: 'app-cardproduct',
  imports: [LucideShoppingCart, LucideStar, DecimalPipe],
  templateUrl: './cardproduct.html',
})
export class Cardproduct {
  productos = input.required<Producto>();
  cantidad = signal(1);
  agregarCarrito = output<Carrito>();

  agregarAlCarrito(productos: Producto){
    this.agregarCarrito.emit({
      id: productos.id,
      title: productos.title,
      precio: productos.precio,
      precio_oferta: this.precioFinal(),
      img: productos.img,
      total: this.totalProducto(),
      cantidad: this.cantidad(),
    });
  }
  precioFinal = computed(()=> {
    const prod = this.productos()
    if(prod.descuento_porcentaje > 0){
      return prod.precio - (prod.precio * prod.descuento_porcentaje / 100);
    }
    return prod.precio;
  })
  totalProducto = computed(() => {
    return this.precioFinal() * this.cantidad();
  });

  constructor() {
    effect(() => {
      console.log(
        `Producto: ${this.productos().title} | Cantidad: ${this.cantidad()} | Total: ${this.totalProducto()}`
      );
    });
  }

  updateCantidad(cant: number) {
    this.cantidad.update(q => {
      const newVal = q + cant;
      return newVal < 1 ? 1 : newVal;
    })
  }

  coloresPlataforma: {
    [key: string]: string;
  } = {
    PS5: '#0070D1',
    PS4: '#003791',
    PS3: '#000000',
    PC: '#FF6B00',
    Steam: '#1B2838',
    Xbox: '#4bbe4b',
    PlayStation: '#003791',
    Nintendo: '#FF0000',
  };

  public getColorPlataforma(plataforma: string): string {
    return this.coloresPlataforma[plataforma] || '#FFFFFF';
  }


  
}
