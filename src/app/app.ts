import { Component, inject, signal } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Homepage } from './homepage/homepage';
import { Navbaradmin } from './navbaradmin/navbaradmin';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Navbaradmin],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('proyectoAngular');
  private router = inject(Router);
  isAdminRoute = signal(false);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Si la URL actual empieza con /admin, mostramos el navbar del admin
      this.isAdminRoute.set(event.urlAfterRedirects.startsWith('/admin'));
    });
  }
}
