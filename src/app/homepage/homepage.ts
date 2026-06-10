import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowRight, LucideGift } from '@lucide/angular';

@Component({
  selector: 'app-homepage',
  imports: [RouterLink, LucideArrowRight, LucideGift],
  templateUrl: './homepage.html',
})
export class Homepage {}
