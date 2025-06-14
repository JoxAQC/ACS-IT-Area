'use client';

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function EventsPage() {
  return (
    <>
      <Navbar />

      <section className="py-5 bg-white chapters-section">
        <div className="container">
          <h1 className="text-center">Eventos</h1>

          <div className="mt-4">
            <h2>Demostración de equipo en computación cuántica</h2>

            <div className="d-flex flex-row flex-wrap align-items-start">
                <div className="me-4" style={{ maxWidth: '50%' }}>
                <img
                    src="https://acs-unmsm.org/assets/img/evento_demostracion_cuantica.jpg"
                    alt="Evento de Demostración Cuántica"
                    width="100%"
                    style={{ borderRadius: '8px' }}
                />
                </div>

                <div style={{ marginLeft: '80px' }}>
                    <h2>Detalles</h2>
                    <p>
                        Evento presencial<br />
                        29 de mayo de 2025 | 5 PM ET
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={() =>
                            window.location.href =
                                'https://docs.google.com/forms/d/e/1FAIpQLSfUWsuBwZd4gsj5kGOEGQYqBtTTUZTru4qL2iiV1htBDV4DLQ/viewform'
                        }
                    >
                        Inscríbete
                    </button>
                </div>
            </div>
        </div>

          <div className="mt-4">
            <h2>ACS on Campus</h2>

            <div className="d-flex flex-row flex-wrap align-items-start">
              <div className="me-4" style={{ maxWidth: '50%' }}>
                <img
                  alt="ACS on Campus"
                  src="https://www.acs.org/content/dam/events-hub/830/sanmarcos_db946e3f98.jpg.scale.small.1024.jpg"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
              </div>

              <div style={{ marginLeft: '80px' }}>
                <h2>Detalles</h2>
                <p>
                  Evento presencial <br />
                  9 de abril de 2025 | 9 AM – 1 PM ET <br />
                  4 horas
                </p>
                <a
                  target="_blank"
                  href="https://www.acs.org/events/all-events/acs-on-campus-universidad-nacional-mayor-de-san-marcos.html"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">Saber más</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}