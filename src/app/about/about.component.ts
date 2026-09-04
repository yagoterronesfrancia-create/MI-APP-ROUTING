import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Página informativa de la empresa y su equipo de trabajo. */
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent { }
