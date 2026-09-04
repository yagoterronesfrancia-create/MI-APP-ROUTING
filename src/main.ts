import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

/** Inicia la aplicación Angular usando el componente raíz. */
bootstrapApplication(AppComponent, {
 // Registra todas las rutas disponibles para la navegación SPA.
 providers: [
 provideRouter(routes)
 ]
}).catch(err => console.error(err));
