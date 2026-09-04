# Mi App Angular Routing-Neil chavez Modesto

Aplicación web de una empresa de servicios digitales, desarrollada con Angular 17. Incluye navegación entre páginas, diseño responsive, formulario de contacto y una identidad visual corporativa basada en azul y dorado.

## Qué se agregó

- Página de inicio con hero principal, métricas visuales, propuesta de valor y botones de acción.
- Página de servicios con siete servicios presentados en tarjetas:
	- Diseño Web Apps
	- Redes Sociales
	- Marketing Digital
	- Desarrollo Software
	- Hosting y Dominio
	- Estrategia Digital
	- Identidad Corporativa
- Página «Acerca de» con información de la empresa y fotografías del equipo.
- Página «Contacto» con datos de contacto y formulario funcional.
- Página «Cotización» con formulario para solicitar una propuesta de proyecto.
- Páginas de «Iniciar sesión» y «Registro» con validación visual de campos.
- Barra de navegación compartida con enlaces activos según la ruta actual.
- Estilos separados de las plantillas HTML en cada componente.
- Diseño responsive para escritorio, tablet y móvil.
- Pruebas unitarias configuradas para los componentes standalone y el router.

## Cómo funciona

La aplicación utiliza componentes standalone de Angular. El archivo `src/app/app.config.ts` registra el router y `src/app/app.routes.ts` define las páginas disponibles:

| Ruta | Página |
| --- | --- |
| `/home` | Inicio |
| `/services` | Servicios |
| `/about` | Acerca de |
| `/contact` | Contacto |
| `/quotation` | Solicitar cotización |
| `/login` | Iniciar sesión |
| `/register` | Crear cuenta |

Al abrir la ruta raíz (`/`), Angular redirige automáticamente a `/home`. Las rutas desconocidas también vuelven a la página de inicio.

La navegación se realiza con `routerLink`, por lo que la aplicación funciona como una SPA: cambia el contenido sin recargar completamente el navegador. `router-outlet` es el espacio donde se muestra cada página.

## Formulario de contacto

El formulario está implementado en `ContactComponent` usando `FormsModule` y enlace bidireccional con `ngModel`.

1. El usuario introduce nombre, email, asunto y mensaje.
2. Al enviar, `onSubmit()` guarda los datos en la consola del navegador.
3. Se muestra un mensaje de confirmación mediante `messageSent`.
4. Después de tres segundos, el formulario se limpia y vuelve a su estado inicial.

Actualmente el formulario es demostrativo y no envía datos a un servidor o servicio de email.

Los formularios de cotización, login y registro también funcionan actualmente como demostraciones de frontend. Muestran sus estados de éxito y validan campos básicos, pero todavía no tienen conexión con una API, una base de datos ni un sistema real de autenticación.

## Estructura principal

```text
src/
	app/
		app.component.html       # Navegación y router-outlet
		app.component.css        # Estilos globales de la estructura principal
		app.routes.ts            # Configuración de rutas
		home/                    # Página de inicio
		services/                # Página de servicios
		about/                   # Información y equipo
		contact/                 # Información y formulario
	assets/                    # Fotografías y recursos visuales
	styles.css                 # Tema y estilos globales
```

Cada página mantiene su lógica en un archivo `.ts`, su estructura en un archivo `.html` y sus estilos en un archivo `.css`.

## Recursos visuales y accesibilidad

Las fotografías del equipo se encuentran en `src/assets/` y se cargan desde las plantillas mediante la ruta `assets/...`. Cada imagen incluye un atributo `alt` para describirla cuando no puede visualizarse.

Los campos del formulario tienen elementos `label` asociados mediante `for` e `id`. La navegación del footer utiliza `aria-label` para identificarla correctamente ante lectores de pantalla.

## Mantenimiento

- Para cambiar una ruta, editar `src/app/app.routes.ts`.
- Para añadir un servicio, agregar un objeto al arreglo `services` de `ServicesComponent`.
- Para actualizar los colores generales, modificar las variables de `src/styles.css`.
- Para cambiar textos o imágenes de una página, editar su archivo `.html` correspondiente.
- Después de cambios importantes, ejecutar `npm test` y `npm run build`.

## Requisitos

- Node.js y npm instalados.
- Angular CLI 17, disponible mediante las dependencias del proyecto.

Instalar dependencias:

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm start
```

Después, abrir `http://localhost:4200/`. La aplicación se recarga automáticamente al modificar los archivos.

## Crear una build de producción

```bash
npm run build
```

Los archivos compilados se generan en `dist/mi-app-routing/`.

## Ejecutar pruebas

```bash
npm test
```

Para ejecutar las pruebas sin modo interactivo en Chrome Headless:

```bash
npm test -- --watch=false --browsers=ChromeHeadless
```

La suite actual verifica la creación de los componentes principales y su configuración de routing.

## Tecnologías

- Angular 17
- TypeScript
- Angular Router
- Angular Forms
- RxJS
- Jasmine y Karma
