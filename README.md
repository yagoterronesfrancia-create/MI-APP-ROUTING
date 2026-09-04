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
- Página reutilizable de detalle para cada servicio, con rutas dinámicas como `/services/web-apps`.
- Animaciones de entrada, efectos hover y llamadas a la acción en las tarjetas y detalles.
- Página «Acerca de» con información de la empresa y fotografías del equipo.
- Página «Contacto» con datos de contacto y formulario funcional.
- Página «Cotización» con formulario para solicitar una propuesta de proyecto.
- Páginas de «Iniciar sesión» y «Registro» con validación visual de campos.
- Barra de navegación compartida con enlaces activos según la ruta actual.
- Footer corporativo compartido con enlaces, contacto, teléfono, CTA y diseño responsive.
- Estilos separados de las plantillas HTML en cada componente.
- Diseño responsive para escritorio, tablet y móvil.
- Pruebas unitarias configuradas para los componentes standalone y el router.
- Comentarios y documentación JSDoc en los componentes, plantillas, estilos y pruebas.

## Cómo funciona

La aplicación utiliza componentes standalone de Angular. El archivo `src/app/app.config.ts` registra el router y `src/app/app.routes.ts` define las páginas disponibles:

| Ruta | Página |
| --- | --- |
| `/home` | Inicio |
| `/services` | Servicios |
| `/services/web-apps` | Detalle de Diseño Web Apps |
| `/services/redes-sociales` | Detalle de Redes Sociales |
| `/services/marketing-digital` | Detalle de Marketing Digital |
| `/services/software` | Detalle de Desarrollo Software |
| `/services/hosting-dominio` | Detalle de Hosting y Dominio |
| `/services/estrategia-digital` | Detalle de Estrategia Digital |
| `/services/identidad-corporativa` | Detalle de Identidad Corporativa |
| `/about` | Acerca de |
| `/contact` | Contacto |
| `/quotation` | Solicitar cotización |
| `/login` | Iniciar sesión |
| `/register` | Crear cuenta |

Al abrir la ruta raíz (`/`), Angular redirige automáticamente a `/home`. Las rutas desconocidas también vuelven a la página de inicio.

La navegación se realiza con `routerLink`, por lo que la aplicación funciona como una SPA: cambia el contenido sin recargar completamente el navegador. `router-outlet` es el espacio donde se muestra cada página.

El componente `ServiceDetailComponent` lee el parámetro `:slug` de la URL y busca el servicio correspondiente en `services.data.ts`. De esta forma, una sola plantilla reutilizable genera el detalle de los siete servicios.

### Servicios y detalles dinámicos

Los servicios se definen una sola vez en `src/app/services/services.data.ts` mediante la interfaz `ServiceItem`. Cada servicio contiene:

- `slug`: identificador que forma parte de la URL.
- `icon`: emoji representativo.
- `title`: nombre del servicio.
- `description`: descripción breve para la tarjeta.
- `detail`: texto ampliado para la página de detalle.
- `features`: lista de capacidades incluidas.
- `accent`: fondo visual del icono.

La página `/services` utiliza `*ngFor` para generar las tarjetas. Al pulsar «Ver detalle», Angular navega a `/services/:slug`. `ServiceDetailComponent` lee ese slug con `ActivatedRoute` y busca el objeto correspondiente en el catálogo compartido. Así se evita duplicar un componente para cada servicio.

### Cotización

La ruta `/quotation` muestra un formulario para solicitar una propuesta. El formulario utiliza `FormsModule` y `[(ngModel)]` para sincronizar nombre, email, servicio, presupuesto, plazo y detalles del proyecto.

Los campos obligatorios usan `required`; mientras el formulario no sea válido, el botón permanece deshabilitado. Al enviarlo, `submitQuotation()` activa un mensaje de confirmación. Esta versión es de frontend y todavía no envía datos a una API.

### Login y registro

Las rutas `/login` y `/register` incluyen formularios visuales con validación básica:

- Login: email obligatorio y contraseña de mínimo seis caracteres.
- Registro: nombre, email, contraseña y confirmación de contraseña.
- Registro: muestra un error si las contraseñas no coinciden.

Estas pantallas son demostrativas. No almacenan contraseñas ni implementan autenticación real; para ello sería necesario conectar una API y un sistema seguro de usuarios.

### Footer y diseño visual

El footer se encuentra en `app.component.html`, fuera de `router-outlet`, por lo que aparece en todas las rutas. Está dividido en marca, enlaces de navegación, acciones de usuario y contacto. Incluye enlaces `mailto:` y `tel:`, un botón de cotización y una versión de una sola columna para móviles.

Las tarjetas, botones y enlaces utilizan transiciones y estados `:hover`. La página de detalle incorpora además una animación `@keyframes` de entrada al navegar entre servicios.

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
		service-detail/          # Detalle reutilizable por slug
		quotation/               # Formulario de cotización
		login/                   # Inicio de sesión demostrativo
		register/                # Registro demostrativo
		about/                   # Información y equipo
		contact/                 # Información y formulario
	assets/                    # Fotografías y recursos visuales
	styles.css                 # Tema y estilos globales
```

Cada página mantiene su lógica en un archivo `.ts`, su estructura en un archivo `.html` y sus estilos en un archivo `.css`.

Los archivos `.spec.ts` contienen las pruebas unitarias de cada componente. El archivo `services.data.ts` funciona como fuente de datos compartida por el listado y el detalle de servicios.

## Recursos visuales y accesibilidad

Las fotografías del equipo se encuentran en `src/assets/` y se cargan desde las plantillas mediante la ruta `assets/...`. Cada imagen incluye un atributo `alt` para describirla cuando no puede visualizarse.

Los campos del formulario tienen elementos `label` asociados mediante `for` e `id`. La navegación del footer utiliza `aria-label` para identificarla correctamente ante lectores de pantalla.

## Mantenimiento

- Para cambiar una ruta, editar `src/app/app.routes.ts`.
- Para añadir un servicio nuevo, editar `src/app/services/services.data.ts` incluyendo un `slug` único, descripción, detalle y características.
- Para modificar el footer, editar `src/app/app.component.html` y `src/app/app.component.css`.
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
