import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideArrowLeft,
  LucideMinus,
  LucidePlus,
  LucideShoppingBag,
  LucideTrash2,
} from '@lucide/angular';
import { Cart } from '../services/cart';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-carrito',
  imports: [
    RouterLink,
    LucideShoppingBag,
    LucideArrowLeft,
    LucideTrash2,
    LucideMinus,
    LucidePlus,
    DecimalPipe
  ],
  templateUrl: './carrito.html',
})
export class Carrito {
  cartService = inject(Cart);
}
