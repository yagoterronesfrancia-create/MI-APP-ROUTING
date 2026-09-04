import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

/** Página de contacto que combina información empresarial y un formulario. */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  /** Indica si debe mostrarse el mensaje de envío exitoso. */
  messageSent = false;

  /** Modelo enlazado a los campos del formulario mediante [(ngModel)]. */
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  /**
   * Procesa el envío, muestra una confirmación y limpia el formulario
   * después de tres segundos.
   */
  onSubmit() {
    console.log('Formulario enviado:', this.formData);
    this.messageSent = true;
    setTimeout(() => {
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      this.messageSent = false;
    }, 3000);
  }
}
