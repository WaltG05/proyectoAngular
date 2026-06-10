import { DecimalPipe } from '@angular/common';
import { Component, computed, effect, input, output, signal } from '@angular/core';
import { LucideShoppingCart, LucideStar } from '@lucide/angular';

@Component({
  selector: 'app-cardproduct',
  imports: [LucideShoppingCart, LucideStar, DecimalPipe],
  templateUrl: './cardproduct.html',
})
export class Cardproduct {
  productos = input.required<any>();
  cantidad = signal(1);
  agregarAlCarrito = output<number>();

  precioOferta = computed(() => this.productos().precio - this.productos().precio * this.productos().descuento_porcentaje / 100);

  constructor() {
    effect(() => {
      console.log(`La cantidad del producto ${this.productos().title} cambió a ${this.cantidad()}`);
      if(this.cantidad() > this.productos().stock){
        alert('No hay stock suficiente');
        this.cantidad.set(this.productos().stock);
      }
    })
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
