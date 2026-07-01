import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbaradmin',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbaradmin.html',
})
export class Navbaradmin {

  MenuOpen: boolean = false;
  toggleMenu() {
    this.MenuOpen = !this.MenuOpen;
    
  }
}
