'use client';

import Header from '../components/Navbar';
import Footer from '../components/Footer';
import Script from 'next/script';

export default function ContactPage() {
  return (
    <>
      <Header />

      <section className="contact-section section py-5">
        <div className="container">
          <h1 className="text-center">Contáctanos</h1>
          <div className="contact-form mt-4">
            <form action="/api/contact" method="POST" className="d-flex flex-column gap-3">
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Tu nombre"
                required
                className="form-control"
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Tu correo electrónico"
                required
                className="form-control"
              />
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Asunto"
                required
                className="form-control"
              />
              <textarea
                id="message"
                name="message"
                placeholder="Mensaje"
                required
                className="form-control"
                rows={5}
              />
              <div
                className="g-recaptcha d-flex justify-content-center"
                data-sitekey="6LfBVAYrAAAAAB4qxL1G61QzwbjdXS2mgJ2POu5J"
              ></div>
              <button
                id="submit-btn"
                type="submit"
                className="btn"
                style={{ backgroundColor: '#0054a6', color: 'white' }}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />

      {/* Google reCAPTCHA Script */}
      <Script src="https://www.google.com/recaptcha/api.js" async defer />
    </>
  );
}