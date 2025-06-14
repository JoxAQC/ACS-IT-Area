'use client';

import { useState } from 'react';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import Script from 'next/script';

export default function ContactPage() {
  const [status, setStatus] = useState(null); // para mostrar mensajes

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    if (typeof grecaptcha === 'undefined') {
    setStatus('Error: reCAPTCHA no está listo.');
    return;
    }
    
    const captcha = grecaptcha.getResponse();

    if (!captcha) {
      setStatus('Por favor, completa el CAPTCHA.');
      return;
    }

    try {
      const res = await fetch('/contact/api', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('¡Mensaje enviado exitosamente!');
        form.reset();
        grecaptcha.reset(); // reinicia el captcha
      } else {
        setStatus(data.error || 'Error al enviar el mensaje.');
      }
    } catch (err) {
      setStatus('Error de red al enviar el formulario.');
    }
  };

  return (
    <>
      <Header />

      <section className="contact-section section py-5">
        <div className="container">
          <h1 className="text-center">Contáctanos</h1>
          <div className="contact-form mt-4">
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
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
                rows={3}
              />
              <div
                className="g-recaptcha d-flex justify-content-center"
                data-sitekey="6Ldu82ArAAAAAB0gUcsJpdPxutQCouCaTD3F14rU"
              ></div>
              <button
                id="submit-btn"
                type="submit"
                className="btn"
                style={{ backgroundColor: '#0054a6', color: 'white' }}
              >
                Enviar
              </button>
              {status && (
                <p className="text-center mt-3" style={{ color: status.includes('¡') ? 'green' : 'red' }}>
                  {status}
                </p>
              )}
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