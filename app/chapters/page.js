// app/officers/page.js
'use client';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Officers() {
  const officers = [
    ['Asesor de Facultad', 'PhD. Jose Orlando Calvay Castillo', 'advisor@acs-unmsm.org'],
    ['Presidente', 'Israel Emanuel Gonzales Cruz', 'president@acs-unmsm.org'],
    ['Vicepresidente', 'Frances Atena Malapi Segura', 'vicepresident@acs-unmsm.org'],
    ['Tesorero', 'Breiner Smith Fuentes Bulnes', 'treasurer@acs-unmsm.org'],
    ['Secretaria', 'Geraldine Campos Arias', 'secretary@acs-unmsm.org'],
    ['Secretaria', 'Valery Celit Figueroa Chachi', 'secretary@acs-unmsm.org'],
    ['Coordinador de Marketing', 'Zulie Milene Yucra Luza', 'chief.marketing@acs-unmsm.org'],
    ['Subcoordinador de Marketing', 'Dalma Cruzado Tintaya', 'marketing@acs-unmsm.org'],
    ['Coordinador de Eventos', 'Jhefferson Andre Zagaceta Pinpincos', 'chief.project.manager@acs-unmsm.org'],
    ['Subcoordinador de Eventos', 'Victor Manuel Valqui Ramos', 'project.manager@acs-unmsm.org'],
    ['Talento Humano', 'Amira Briseida Jacinto Mauricio', 'human.resources@acs-unmsm.org'],
    ['Coordinador de Vinculación Interna', 'Javier Antony Sanchez Hilasaca', 'internal.liaison@acs-unmsm.org'],
    ['Coordinador de Vinculación Externa', 'Diana Rosa Soto Mezarino', 'external.liaison@acs-unmsm.org'],
    ['Coordinador de Tecnología de la Información', 'Jose Alessandro Quispe Cabello', 'cio@acs-unmsm.org'],
    ['Coordinadora K-12', 'Katia Melissa Merino Huaman', 'k12@acs-unmsm.org'],
  ];

  return (
    <>
      <Head>
        <title>Oficiales del Capítulo</title>
        <link rel="icon" href="/assets/img/icon.png" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.12.1/css/all.css"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <section className="py-5 bg-white chapters-section">
        <div className="container">
          <h1 className="text-center">Oficiales del Capítulo</h1>
          <div className="mt-4">
            {officers.map(([role, name, email], idx) => (
              <div key={idx}>
                <h2>{role}</h2>
                <p>
                  {name} - <a href={`mailto:${email}`}>{email}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}