import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginaerro',
  templateUrl: './paginaerro.component.html',
  styleUrls: ['./paginaerro.component.css']
})
export class PaginaerroComponent {

  constructor(private router: Router) { }

  goToHomePage() {
    this.router.navigate(['/']);
  }
}
