import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

/** Pantalla de registro visual para nuevos usuarios. */
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  /** Datos enlazados a los campos del formulario de registro. */
  account = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  /** Controla el mensaje de registro correcto. */
  registered = false;

  /** Confirma el registro si las contraseñas coinciden. */
  register(): void {
    this.registered = this.account.password === this.account.confirmPassword;
  }
}
