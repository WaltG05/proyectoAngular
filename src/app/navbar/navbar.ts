import { Component, signal, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideMenu, LucideShoppingCart, LucideUser, LucideX, LucideGamepad2 } from '@lucide/angular';
import { Cart } from '../services/cart';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule, LucideShoppingCart, LucideUser, LucideX, LucideMenu, LucideGamepad2],
  templateUrl: './navbar.html',
})
export class Navbar {
  cartService = inject(Cart);
  isLogged: boolean = true;
  usuario: string = 'admin';

  mobileMenuOpen: boolean = false;
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }


  navigation: any[] = [
    {
      href: '/', label: 'Inicio'
    },
    {
      href: '/products', label: 'Productos'
    },
    {
      href: '/categories', label: 'Categorias'
    },
    {
      href: '/directivas', label: 'Directivas'
    },
    {
      href: '/signal', label: 'Signals'
    }
  ]
}
