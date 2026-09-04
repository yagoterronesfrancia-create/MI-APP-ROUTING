import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES, ServiceItem } from './services.data';

/** Página que presenta el catálogo de servicios de forma dinámica. */
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  /**
   * Catálogo renderizado por la plantilla mediante la directiva *ngFor.
   * Para añadir un servicio nuevo basta con incorporar otro objeto al arreglo.
   */
  services: ServiceItem[] = SERVICES;
}
