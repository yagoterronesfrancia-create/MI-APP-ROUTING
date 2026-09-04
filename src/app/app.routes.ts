import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { QuotationComponent } from './quotation/quotation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

/** Mapa de navegación que relaciona cada URL con su componente. */
export const routes: Routes = [
  /** La ruta vacía lleva al usuario a la página de inicio. */
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'quotation', component: QuotationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  /** Cualquier URL desconocida vuelve a la página principal. */
  { path: '**', redirectTo: '/home' }
];
