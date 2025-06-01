'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import BootstrapJS from './BootstrapJS'; // Ajusta la ruta si está en otra carpeta

export default function Navbar() {
  const router = useRouter();

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
            <span className="navbar-toggler-icon"></span>
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
                <a href="https://hidroinnova.acs-unmsm.org/" target="_blank" className="nav-link">Challenge</a>
              </li>
              <li className="nav-item">
                <Link href="/events" className="nav-link">Events</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-3">
              <a href="https://acs-unmsm.org/webmail" target="_blank">
                <i className="fas fa-envelope" style={{ fontSize: '20px', color: 'rgb(79, 79, 79)' }}></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
