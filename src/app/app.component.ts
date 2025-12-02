import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

declare var AOS: any;

// ============================================
// INTERFACES - Tipos de datos
// ============================================
interface Persona {
  nombre: string;
  padres: string[];
}

interface Lugar {
  nombre: string;
  direccion: string;
  ciudad: string;
  urlMapa: string;
  urlMapaEmbed: string;
  infoAdicional?: string;
}

interface EventoItinerario {
  hora: string;
  titulo: string;
  icono: 'ceremonia' | 'coctel' | 'recepcion' | 'fin' | null;
}

interface ImagenGaleria {
  src: string;
  alt: string;
}

interface Musica {
  url: string;
  titulo: string;
  artista: string;
}

interface RedesSociales {
  instagram?: string;
  facebook?: string;
  whatsapp?: string;
}

interface ConfiguracionEvento {
  // Información principal
  titulo: string;
  subtitulo: string;
  
  // Personas
  novio: Persona;
  novia: Persona;
  
  // Fecha y hora - FORMATO: 'YYYY-MM-DDTHH:MM:SS'
  fechaEvento: string;
  fechaLimiteRsvp: string;
  
  // Mensaje
  mensaje: string;
  
  // Lugar
  lugar: Lugar;
  
  // Itinerario
  itinerario: EventoItinerario[];
  
  // Imágenes
  heroImage: string;
  galeria: ImagenGaleria[];
  
  // Música
  musica: Musica | null;
  
  // Redes sociales
  redesSociales: RedesSociales;
  hashtag: string;
  
  // Opciones de visualización
  mostrarGaleria: boolean;
  mostrarMapa: boolean;
  mostrarRsvp: boolean;
}

interface TiempoRestante {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

interface RsvpData {
  nombre: string;
  email: string;
  telefono: string;
  asistira: string;
  invitados: string;
  restricciones: string;
  mensaje: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  // ============================================
  // CONFIGURACIÓN DEL EVENTO - ¡EDITA AQUÍ!
  // ============================================
  config: ConfiguracionEvento = {
    // Título principal (nombres de los novios)
    titulo: 'Luis & Alejandra',
    subtitulo: 'Nos casamos',
    
    // Información del novio
    novio: {
      nombre: 'Luis Eduardo',
      padres: [
        'Roberto García López',
        'María Elena Pérez de García'
      ]
    },
    
    // Información de la novia
    novia: {
      nombre: 'Alejandra María',
      padres: [
        'Carlos Hernández Morales',
        'Ana Lucía Rodríguez de Hernández'
      ]
    },
    
    // FECHA DEL EVENTO - Formato: 'YYYY-MM-DDTHH:MM:SS'
    // Cambia esta fecha para actualizar el countdown automáticamente
    fechaEvento: '2027-03-15T16:00:00',
    
    // Fecha límite para confirmar asistencia
    fechaLimiteRsvp: '1 de Marzo, 2025',
    
    // Mensaje para los invitados
    mensaje: `Con la satisfacción de vernos realizados como personas
y con la bendición de nuestros padres,
hemos decidido unirnos en matrimonio
y compartir este momento tan especial con ustedes.`,
    
    // Información del lugar
    lugar: {
      nombre: 'Hacienda San Gabriel',
      direccion: 'Km 25.5 Carretera a El Salvador',
      ciudad: 'Ciudad de Guatemala',
      urlMapa: 'https://maps.google.com/?q=Hacienda+San+Gabriel+Guatemala',
      urlMapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.8384756782544!2d-90.51284392426835!3d14.605785476549883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a180655c3e6b%3A0xd66a5f8c9e0e4d!2sCiudad%20de%20Guatemala!5e0!3m2!1ses!2sgt!4v1635000000000!5m2!1ses!2sgt',
      infoAdicional: 'Estacionamiento disponible'
    },
    
    // ITINERARIO - Iconos disponibles: 'ceremonia', 'coctel', 'recepcion', 'fin'
    itinerario: [
      {
        hora: '15:00',
        titulo: 'Ceremonia',
        icono: 'ceremonia'
      },
      {
        hora: '17:00',
        titulo: 'Cóctel',
        icono: 'coctel'
      },
      {
        hora: '18:00',
        titulo: 'Recepción',
        icono: 'recepcion'
      },
      {
        hora: '23:00',
        titulo: 'Finaliza la boda',
        icono: 'fin'
      }
    ],
    
    // Imagen principal del hero (fondo)
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920',
    
    // Galería de fotos
    galeria: [
      { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800', alt: 'Momento especial 1' },
      { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800', alt: 'Momento especial 2' },
      { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800', alt: 'Momento especial 3' },
      { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800', alt: 'Momento especial 4' },
      { src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800', alt: 'Momento especial 5' },
      { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', alt: 'Momento especial 6' }
    ],
    
    // Música de fondo (null para desactivar)
    musica: {
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      titulo: 'Perfect',
      artista: 'Ed Sheeran'
    },
    
    // Redes sociales (dejar vacío para ocultar)
    redesSociales: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      whatsapp: '50212345678'
    },
    
    // Hashtag para compartir fotos
    hashtag: 'BodaLuisYAlejandra',
    
    // Opciones de visualización
    mostrarGaleria: true,
    mostrarMapa: true,
    mostrarRsvp: true
  };

  // ============================================
  // VARIABLES DE ESTADO (NO MODIFICAR)
  // ============================================
  isLoading = true;
  
  // Countdown
  tiempoRestante: TiempoRestante = { dias: 0, horas: 0, minutos: 0, segundos: 0 };
  private countdownInterval: any;
  
  // Fecha formateada
  fechaFormateada = '';
  diaSemana = '';
  diaNumero = '';
  mes = '';
  anio = '';
  anioActual = new Date().getFullYear();
  
  // Mapa
  mapaUrl: SafeResourceUrl | null = null;
  direccionCopiada = false;
  
  // Galería
  lightboxAbierto = false;
  imagenActual = 0;
  
  // RSVP
  rsvpEnviado = false;
  enviandoRsvp = false;
  rsvpData: RsvpData = {
    nombre: '',
    email: '',
    telefono: '',
    asistira: 'si',
    invitados: '1',
    restricciones: '',
    mensaje: ''
  };
  
  // Música
  musicaReproduciendo = false;
  panelMusicaAbierto = false;
  volumen = 50;

  constructor(private sanitizer: DomSanitizer) {}

  // ============================================
  // LIFECYCLE HOOKS
  // ============================================
  ngOnInit(): void {
    this.inicializarFechas();
    this.inicializarMapa();
    this.iniciarCountdown();
    
    // Ocultar loading después de 2 segundos
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  ngAfterViewInit(): void {
    // Inicializar AOS después de cargar
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 1000,
          easing: 'ease-out-cubic',
          once: true,
          offset: 100
        });
      }
    }, 2500);
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  // ============================================
  // INICIALIZACIÓN
  // ============================================
  private inicializarFechas(): void {
    const fecha = new Date(this.config.fechaEvento);
    
    // Fecha formateada completa
    const opciones: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    this.fechaFormateada = fecha.toLocaleDateString('es-GT', opciones);
    
    // Partes de la fecha para el banner
    this.diaSemana = fecha.toLocaleDateString('es-GT', { weekday: 'long' });
    this.diaSemana = this.diaSemana.charAt(0).toUpperCase() + this.diaSemana.slice(1);
    this.diaNumero = fecha.getDate().toString();
    this.mes = fecha.toLocaleDateString('es-GT', { month: 'long' });
    this.mes = this.mes.charAt(0).toUpperCase() + this.mes.slice(1);
    this.anio = fecha.getFullYear().toString();
  }

  private inicializarMapa(): void {
    if (this.config.lugar.urlMapaEmbed) {
      this.mapaUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.config.lugar.urlMapaEmbed
      );
    }
  }

  // ============================================
  // COUNTDOWN - Se actualiza automáticamente
  // ============================================
  private iniciarCountdown(): void {
    this.actualizarCountdown();
    this.countdownInterval = setInterval(() => {
      this.actualizarCountdown();
    }, 1000);
  }

  private actualizarCountdown(): void {
    const ahora = new Date().getTime();
    const fechaEvento = new Date(this.config.fechaEvento).getTime();
    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {
      this.tiempoRestante = { dias: 0, horas: 0, minutos: 0, segundos: 0 };
      return;
    }

    this.tiempoRestante = {
      dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
      horas: Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutos: Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60)),
      segundos: Math.floor((diferencia % (1000 * 60)) / 1000)
    };
  }

  // ============================================
  // GALERÍA Y LIGHTBOX
  // ============================================
  getGalleryAnimation(index: number): string {
    const animaciones = ['fade-up', 'fade-left', 'fade-right', 'zoom-in'];
    return animaciones[index % animaciones.length];
  }

  abrirLightbox(index: number): void {
    this.imagenActual = index;
    this.lightboxAbierto = true;
    document.body.style.overflow = 'hidden';
  }

  cerrarLightbox(): void {
    this.lightboxAbierto = false;
    document.body.style.overflow = '';
  }

  imagenAnterior(event: Event): void {
    event.stopPropagation();
    this.imagenActual = (this.imagenActual - 1 + this.config.galeria.length) % this.config.galeria.length;
  }

  imagenSiguiente(event: Event): void {
    event.stopPropagation();
    this.imagenActual = (this.imagenActual + 1) % this.config.galeria.length;
  }

  // ============================================
  // UBICACIÓN
  // ============================================
  copiarDireccion(): void {
    const direccion = `${this.config.lugar.nombre}, ${this.config.lugar.direccion}, ${this.config.lugar.ciudad}`;
    
    navigator.clipboard.writeText(direccion).then(() => {
      this.direccionCopiada = true;
      setTimeout(() => {
        this.direccionCopiada = false;
      }, 2000);
    });
  }

  // ============================================
  // RSVP
  // ============================================
  enviarRsvp(): void {
    if (!this.rsvpData.nombre) {
      return;
    }

    this.enviandoRsvp = true;

    // Simular envío (reemplazar con tu API)
    setTimeout(() => {
      console.log('RSVP enviado:', this.rsvpData);
      this.rsvpEnviado = true;
      this.enviandoRsvp = false;
    }, 1500);
  }

  // ============================================
  // REPRODUCTOR DE MÚSICA
  // ============================================
  togglePanelMusica(): void {
    this.panelMusicaAbierto = !this.panelMusicaAbierto;
  }

  toggleMusica(): void {
    if (!this.audioPlayer?.nativeElement) return;

    const audio = this.audioPlayer.nativeElement;

    if (this.musicaReproduciendo) {
      audio.pause();
    } else {
      audio.volume = this.volumen / 100;
      audio.play().catch(e => console.log('Autoplay bloqueado:', e));
    }

    this.musicaReproduciendo = !this.musicaReproduciendo;
  }

  cambiarVolumen(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.volumen = parseInt(target.value, 10);

    if (this.audioPlayer?.nativeElement) {
      this.audioPlayer.nativeElement.volume = this.volumen / 100;
    }
  }
}
