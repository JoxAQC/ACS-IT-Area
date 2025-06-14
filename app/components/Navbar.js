'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import BootstrapJS from './BootstrapJS';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faChevronDown, faBars } from '@/lib/fontawesome';

export default function Navbar() {
  const [language, setLanguage] = useState('en');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  // Función para cambiar el idioma (solo visual por ahora)
  const changeLanguage = (lang) => {
    setLanguage(lang);
    setShowLanguageMenu(false);
    // Aquí puedes agregar la lógica de cambio de idioma más adelante
  };

  return (
    <>
      <BootstrapJS />
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-custom fixed-top">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <Image 
              src="/assets/img/DIGITAL-ACSSC-UNMSM-rgb-logo.png" 
              alt="Logo" 
              width={350}
              height={100}
              priority
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} className="text-dark" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link href="/chapters" className="nav-link">Officers</Link>
              </li>
              <li className="nav-item">
                <a 
                  href="https://hidroinnova.acs-unmsm.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="nav-link"
                >
                  Hidroinnova Challenge
                </a>
              </li>
              <li className="nav-item">
                <Link href="/events" className="nav-link">Events</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-3">
              <a 
                href="https://acs-unmsm.org/webmail" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-icon-link"
              >
                <FontAwesomeIcon 
                  icon={faEnvelope} 
                  className="nav-icon"
                />
              </a>
              
              {/* Selector de idiomas visual */}
              <div className="dropdown position-relative">
                <button 
                  className="btn btn-link dropdown-toggle d-flex align-items-center p-0" 
                  type="button"
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  aria-expanded={showLanguageMenu}
                >
                  <FontAwesomeIcon icon={faGlobe} className="me-1" />
                  {language === 'en' ? '🇺🇸' : '🇪🇸'}
                  <FontAwesomeIcon icon={faChevronDown} className="ms-1" />
                </button>
                
                <div 
                  className={`dropdown-menu ${showLanguageMenu ? 'show' : ''}`} 
                  style={{ 
                    minWidth: 'auto', 
                    position: 'absolute', 
                    right: 0,
                    top: '100%',
                    zIndex: 1000
                  }}
                >
                  <button 
                    className="dropdown-item d-flex align-items-center py-2" 
                    onClick={() => changeLanguage('en')}
                  >
                    <span className="me-2">🇺🇸</span> English
                  </button>
                  <button 
                    className="dropdown-item d-flex align-items-center py-2" 
                    onClick={() => changeLanguage('es')}
                  >
                    <span className="me-2">🇪🇸</span> Español
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Estilos para el selector de idiomas */}
      <style jsx>{`
        .nav-icon {
          font-size: 20px;
          color: rgb(79, 79, 79);
          transition: all 0.2s ease;
        }
        .nav-icon-link:hover .nav-icon {
          color: #0054a6;
          transform: scale(1.1);
        }
        .dropdown-toggle {
          color: #333;
          text-decoration: none;
          padding: 8px;
        }
        .dropdown-toggle:after {
          display: none;
        }
        .dropdown-toggle:hover {
          color: #0054a6;
        }
        .dropdown-menu {
          border: none;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          border-radius: 8px;
          overflow: hidden;
        }
        .dropdown-item {
          font-size: 14px;
          padding: 8px 16px;
          cursor: pointer;
        }
        .dropdown-item:hover {
          background-color: #f0f5ff;
          color: #0054a6;
        }
      `}</style>
    </>
  );
}