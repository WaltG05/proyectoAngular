import { computed, Injectable, signal } from '@angular/core';
import { listProducts } from '../products/products';

export interface CartItem {
  producto: any;
  cantidad: number;
}

@Injectable({
  providedIn: 'root',
})

export class Cart {
  cartItems = signal<CartItem[]>([]);

  totalItems = computed(() => this.cartItems().reduce((acc, item) => acc + item.cantidad, 0));

  subTotal = computed(() => this.cartItems().reduce((acc, item) => {
    const precioFinal = item.producto.descuento_porcentaje > 0 ? item.producto.precio - (item.producto.precio * item.producto.descuento_porcentaje / 100) : item.producto.precio;
    return acc + (precioFinal * item.cantidad);
  }, 0));

  total = computed(() => this.subTotal() + this.subTotal() * 0.21);

  addToCart(producto: any, cantidad: number = 1) {
    this.cartItems.update(items => {
      const index = items.findIndex(item => item.producto.id === producto.id);

      if(index !== -1)
      {
        const newItems = [...items];
        newItems[index].cantidad += cantidad;
        return newItems;
      }
      return [...items, { producto, cantidad }];
    });
  }

  plusQty(item: CartItem) {
    this.cartItems.update(items => {
      const index = items.findIndex(i => i.producto.id === item.producto.id);
      if(index !== -1) {
        const newItems = [...items];
        newItems[index].cantidad += 1;
        return newItems;
      }
      return items;
    });
  }

  minusQty(item: CartItem) {
    this.cartItems.update(items => {
      const index = items.findIndex(i => i.producto.id === item.producto.id);
      if(index !== -1) {
        const newItems = [...items];
        if(newItems[index].cantidad > 1) {
          newItems[index].cantidad -= 1;
        } else {
          newItems.splice(index, 1);
        }
        return newItems;
      }
      return items;
    });
  }

  vaciarCarrito() {
    this.cartItems.set([]);
  }

  removerItem(item: CartItem){
    this.cartItems.update(items => items.filter(i => i.producto.id !== item.producto.id));
  }

  constructor() {
    console.log('Carrito inicial:', this.cartItems()); // será []
  }
}
