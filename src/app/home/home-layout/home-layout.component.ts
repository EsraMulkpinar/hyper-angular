import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {

  constructor(private router: Router) { }

  navigateTo(layout: string) {
    this.router.navigate([layout]);
  }
}
