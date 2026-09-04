import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SERVICES, ServiceItem } from '../services/services.data';

/** Muestra el detalle de un servicio según el slug de la URL. */
@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent {
  /** Servicio seleccionado desde el catálogo compartido. */
  service: ServiceItem | undefined;

  constructor(route: ActivatedRoute) {
    const slug = route.snapshot.paramMap.get('slug');
    this.service = SERVICES.find(item => item.slug === slug);
  }
}
