import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Página principal con la propuesta de valor y accesos a otras secciones. */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { }
