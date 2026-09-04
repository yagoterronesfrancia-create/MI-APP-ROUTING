import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

/** Pantalla de acceso visual para usuarios registrados. */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  /** Datos que el usuario introduce en el formulario de acceso. */
  credentials = {
    email: '',
    password: ''
  };

  /** Indica si se debe mostrar el acceso de demostración completado. */
  loggedIn = false;

  /** Muestra el estado de acceso de demostración. */
  login(): void {
    this.loggedIn = true;
  }
}
