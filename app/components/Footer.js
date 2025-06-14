'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faFacebookF, 
  faLinkedinIn 
} from '@/lib/fontawesome';

export default function Footer({ locale = 'es' }) {
  const content = {
    es: {
      title: 'Bienvenido a ACS UNMSM',
      description1: 'Somos la sección estudiantil oficial de la American Chemical Society en la UNMSM.',
      description2: 'Promovemos la química con propósito, desde San Marcos para el mundo.',
      follow: 'Síguenos en nuestras redes sociales',
      copyright: '© {year} ACS UNMSM Student Chapter. Todos los derechos reservados.'
    },
    en: {
      title: 'Welcome to ACS UNMSM',
      description1: 'We are the official student chapter of the American Chemical Society at UNMSM.',
      description2: 'We promote chemistry with purpose, from San Marcos to the world.',
      follow: 'Follow us on our social networks',
      copyright: '© {year} ACS UNMSM Student Chapter. All rights reserved.'
    }
  };

  const t = content[locale];
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Fondo decorativo */}
      <div className="footer-bg"></div>
      
      <div className="footer-container">
        <h1 className="footer-title">{t.title}</h1>
        <p className="footer-description">{t.description1}</p>
        <p className="footer-description">{t.description2}</p>

        <div className="footer-divider">
          <div className="footer-dots">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="footer-dot"></div>
            ))}
          </div>
        </div>

        <p className="footer-follow">{t.follow}</p>

        <div className="footer-social-icons">
          <a 
            href="https://instagram.com/acs.unmsm.pe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <FontAwesomeIcon 
              icon={faInstagram} 
              className="footer-social-icon"
            />
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=61571451074801" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <FontAwesomeIcon 
              icon={faFacebookF} 
              className="footer-social-icon"
            />
          </a>
          <a 
            href="https://www.linkedin.com/company/unmsmacs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <FontAwesomeIcon 
              icon={faLinkedinIn} 
              className="footer-social-icon"
            />
          </a>
        </div>
        
        <div className="footer-copyright">
          <p>{t.copyright.replace('{year}', year)}</p>
        </div>
      </div>
    </footer>
  );
}