import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.html',
})
export class Signal {

  cantidad = signal<number>(0);
  stock: number = 5;
  

  sumarCarrito(): void {
    this.cantidad.update((cantidad) => cantidad + 1);
    
  }

  total = computed(() => {
    return this.cantidad() * 1500;
  })

  constructor(){
    effect(() => {
      if(this.cantidad() > this.stock){
        alert('No hay stock suficiente');
        this.cantidad.set(this.stock);    
      }
    })
  }

}

