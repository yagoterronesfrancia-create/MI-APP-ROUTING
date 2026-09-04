import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

/**
 * Componente raíz de la aplicación.
 * Mantiene la navegación, el contenido de la ruta activa y el footer.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /** Nombre interno de la aplicación, usado por la interfaz y las pruebas. */
  title = 'mi-app-routing';
}
