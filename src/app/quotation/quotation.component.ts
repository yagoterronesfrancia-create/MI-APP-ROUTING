import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

/** Página para solicitar una cotización orientativa de un proyecto. */
@Component({
  selector: 'app-quotation',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent {
  /** Datos enlazados al formulario mediante ngModel. */
  quotation = {
    name: '',
    email: '',
    service: '',
    budget: '',
    timeline: '',
    details: ''
  };

  /** Controla la confirmación que aparece después de enviar la solicitud. */
  submitted = false;

  /** Servicios disponibles para seleccionar en la cotización. */
  services = [
    'Diseño Web Apps',
    'Redes Sociales',
    'Marketing Digital',
    'Desarrollo Software',
    'Hosting y Dominio',
    'Estrategia Digital',
    'Identidad Corporativa'
  ];

  /** Muestra confirmación después de recibir una solicitud válida. */
  submitQuotation(): void {
    this.submitted = true;
  }
}
