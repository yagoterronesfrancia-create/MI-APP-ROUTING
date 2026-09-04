import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Datos necesarios para construir una tarjeta del catálogo de servicios. */
interface ServiceItem {
  /** Emoji que identifica visualmente el servicio. */
  icon: string;
  /** Nombre visible del servicio. */
  title: string;
  /** Explicación breve de lo que ofrece el servicio. */
  description: string;
  /** Fondo visual aplicado al icono de la tarjeta. */
  accent: string;
}

/** Página que presenta el catálogo de servicios de forma dinámica. */
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  /**
   * Catálogo renderizado por la plantilla mediante la directiva *ngFor.
   * Para añadir un servicio nuevo basta con incorporar otro objeto al arreglo.
   */
  services: ServiceItem[] = [
    {
      icon: '💻',
      title: 'Diseño Web Apps',
      description: 'Desarrollo de sitios web y aplicaciones modernas, adaptables a diferentes dispositivos y orientadas a mejorar la experiencia del usuario.',
      accent: 'linear-gradient(135deg, #3b82f6, #2563eb)'
    },
    {
      icon: '📱',
      title: 'Redes Sociales',
      description: 'Gestión y creación de contenido para fortalecer la presencia digital de las empresas y conectar con sus clientes.',
      accent: 'linear-gradient(135deg, #ec4899, #d946ef)'
    },
    {
      icon: '📈',
      title: 'Marketing Digital',
      description: 'Diseño de estrategias digitales para atraer clientes, aumentar la visibilidad y mejorar los resultados comerciales.',
      accent: 'linear-gradient(135deg, #10b981, #059669)'
    },
    {
      icon: '🧩',
      title: 'Desarrollo Software',
      description: 'Desarrollo de soluciones de software personalizadas de acuerdo con las necesidades y procesos de cada organización.',
      accent: 'linear-gradient(135deg, #f59e0b, #ea580c)'
    },
    {
      icon: '🌐',
      title: 'Hosting & Dominio',
      description: 'Servicios de alojamiento web y registro de dominios para mantener los proyectos digitales disponibles en Internet.',
      accent: 'linear-gradient(135deg, #06b6d4, #0284c7)'
    },
    {
      icon: '🎯',
      title: 'Estrategia Digital',
      description: 'Planificación de estrategias digitales orientadas a mejorar la presencia, competitividad y crecimiento de una empresa.',
      accent: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
    },
    {
      icon: '🎨',
      title: 'Identidad Corporativa',
      description: 'Diseño de elementos visuales que permiten construir una identidad de marca profesional, coherente y reconocible.',
      accent: 'linear-gradient(135deg, #ef4444, #dc2626)'
    }
  ];
}
