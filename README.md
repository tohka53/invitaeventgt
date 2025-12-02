# 🎉 InvitaEventGT - Invitaciones Digitales Elegantes

Una aplicación Angular elegante y moderna para crear invitaciones digitales para bodas, quinceaños, bautizos y eventos especiales.

![Angular](https://img.shields.io/badge/Angular-17+-red?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=flat-square&logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-Sass-pink?style=flat-square&logo=sass)

## ✨ Características

- 🎨 **Diseño Elegante**: Estética sofisticada con tipografías premium y paleta de colores refinada
- ⏱️ **Cuenta Regresiva**: Contador animado en tiempo real
- 🖼️ **Galería de Fotos**: Con lightbox y animaciones suaves
- 📍 **Integración con Maps**: Mapa interactivo con la ubicación del evento
- 📝 **Formulario RSVP**: Confirmación de asistencia con validaciones
- 🎵 **Reproductor de Música**: Control de música de fondo flotante
- 📱 **100% Responsive**: Se adapta perfectamente a móviles, tablets y desktop
- 🎭 **Animaciones AOS**: Animaciones al hacer scroll para una experiencia inmersiva
- 🌙 **Carga Elegante**: Pantalla de carga animada

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js 18+ 
- npm o yarn
- Angular CLI 17+

### Instalación

```bash
# Clonar o descargar el proyecto
cd invitaeventgt

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
ng serve

# Abrir en navegador
http://localhost:4200
```

## ⚙️ Personalización

### Configurar tu Evento

Edita el archivo `src/app/shared/services/event.service.ts`:

```typescript
private eventData: EventData = {
  eventType: 'boda',              // boda, quinceanos, bautizo, etc.
  title: 'Luis & Alejandra',      // Título principal
  subtitle: 'Nos casamos',        // Subtítulo
  
  hosts: [
    {
      name: 'Luis Eduardo',
      role: 'Novio',
      parents: ['Roberto García', 'María Pérez']
    },
    // ...
  ],
  
  date: new Date('2025-03-15T16:00:00'),  // Fecha del evento
  time: '4:00 PM',
  
  venue: {
    name: 'Hacienda San Gabriel',
    address: 'Tu dirección aquí',
    city: 'Ciudad de Guatemala',
    mapEmbedUrl: 'URL de Google Maps Embed'
  },
  
  // ...más configuraciones
};
```

### Cambiar Colores

Modifica las variables CSS en `src/styles/main.scss`:

```scss
:root {
  // Colores principales
  --primary-gold: #c9a962;        // Color dorado principal
  --secondary-rose: #d4a5a5;      // Color rosa secundario
  
  // Fondos
  --bg-cream: #faf8f5;            // Fondo principal
  
  // Textos
  --text-dark: #2d2926;           // Texto oscuro
}
```

### Cambiar Tipografías

Las fuentes se cargan desde Google Fonts en `src/index.html`. Las fuentes actuales son:

- **Great Vibes**: Títulos principales (script elegante)
- **Cormorant Garamond**: Encabezados (serif clásico)
- **Playfair Display**: Subtítulos (serif moderno)
- **Montserrat**: Texto del cuerpo (sans-serif)

## 📁 Estructura del Proyecto

```
invitaeventgt/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── hero/           # Sección principal
│   │   │   ├── countdown/      # Cuenta regresiva
│   │   │   ├── event-info/     # Información del evento
│   │   │   ├── gallery/        # Galería de fotos
│   │   │   ├── location/       # Mapa y ubicación
│   │   │   ├── rsvp/          # Formulario de confirmación
│   │   │   ├── music-player/   # Reproductor de música
│   │   │   └── footer/        # Pie de página
│   │   ├── shared/
│   │   │   ├── models/        # Interfaces y tipos
│   │   │   └── services/      # Servicios compartidos
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── assets/
│   ├── styles/
│   │   └── main.scss          # Estilos globales
│   └── index.html
├── angular.json
├── package.json
└── tsconfig.json
```

## 🎯 Tipos de Eventos Soportados

| Tipo | Descripción |
|------|-------------|
| `boda` | Invitaciones de boda |
| `quinceanos` | Fiesta de XV años |
| `bautizo` | Bautizos y presentaciones |
| `cumpleanos` | Fiestas de cumpleaños |
| `aniversario` | Aniversarios de boda |
| `graduacion` | Graduaciones |
| `baby-shower` | Baby showers |
| `compromiso` | Fiestas de compromiso |

## 📦 Build para Producción

```bash
# Compilar para producción
ng build --configuration production

# Los archivos se generan en dist/invitaeventgt/
```

## 🌐 Despliegue

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

### Netlify
1. Conecta tu repositorio
2. Build command: `ng build --configuration production`
3. Publish directory: `dist/invitaeventgt/browser`

### GitHub Pages
```bash
ng build --configuration production --base-href /tu-repo/
# Sube el contenido de dist/ a la rama gh-pages
```

## 🔧 Agregar Música Real

1. Sube tu archivo MP3 a `src/assets/music/`
2. Edita `music-player.component.ts`:

```typescript
audioSrc = 'assets/music/tu-cancion.mp3';
currentSong = 'Nombre de la Canción';
```

## 📸 Agregar Fotos Reales

1. Sube las fotos a `src/assets/images/`
2. Actualiza el array en `event.service.ts`:

```typescript
galleryImages: [
  { src: 'assets/images/foto1.jpg', alt: 'Descripción' },
  // ...
]
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor, abre un issue o envía un pull request.

## 📄 Licencia

MIT License - Libre para uso personal y comercial.

---

Hecho con ❤️ en Guatemala 🇬🇹

**InvitaEventGT** - Haciendo tus momentos especiales inolvidables ✨
