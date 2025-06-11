'use client';

export default function Footer({ locale = 'es' }) {

  const content = {
    es: {
      title: 'Bienvenido a ACS UNMSM',
      description1: 'Somos la sección estudiantil oficial de la American Chemical Society en la UNMSM.',
      description2: 'Promovemos la química con propósito, desde San Marcos para el mundo.',
      follow: 'Síguenos en nuestras redes sociales'
    },
    en: {
      title: 'Welcome to ACS UNMSM',
      description1: 'We are the official student chapter of the American Chemical Society at UNMSM.',
      description2: 'We promote chemistry with purpose, from San Marcos to the world.',
      follow: 'Follow us on our social networks'
    }
  };

  const t = content[locale];

  return (
    <footer className="footer py-5">
      <div className="container text-center">
        <h1 className="mb-4">{t.title}</h1>
        <p className="lead">{t.description1}</p>
        <p className="lead">{t.description2}</p>

        <div className="my-3">o o o o</div>

        <p className="mb-2">{t.follow}</p>

        <div className="social-icons d-flex justify-content-center gap-3 mb-4">
          <a href="https://instagram.com/acs.unmsm.pe" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61571451074801" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <i className="fab fa-facebook-f fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/company/unmsmacs" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <i className="fab fa-linkedin-in fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
