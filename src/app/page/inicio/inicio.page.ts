import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss']
})
export class InicioPage {

  constructor(private router: Router) {}

  irAStore() {
    this.router.navigate(['/store']);
  }
}
