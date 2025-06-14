// lib/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';

// Iconos sólidos
import { 
  faEnvelope,
  faGlobe,
  faChevronDown,
  faBars
} from '@fortawesome/free-solid-svg-icons';

// Iconos de marcas (redes sociales)
import { 
  faInstagram,
  faFacebookF,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

// Agregar todos los iconos a la librería
library.add(
  faEnvelope,
  faGlobe,
  faChevronDown,
  faBars,
  faInstagram,
  faFacebookF,
  faLinkedinIn
);

// Exportar los iconos individualmente
export {
  faEnvelope,
  faGlobe,
  faChevronDown,
  faBars,
  faInstagram,
  faFacebookF,
  faLinkedinIn
};