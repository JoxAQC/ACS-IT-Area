import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroCarousel />

      {/* Contenido principal */}
      <section className="hero-section py-10">
        <div className="container">
          <div className="row hero-content align-items-center">
            <div className="col-md-6 hero-image text-center">
              <img src="/assets/img/main.png" alt="Hero Image" className="img-fluid" />
            </div>
            <div className="col-md-6 hero-text mt-4 mt-md-0">
              <h1>Bienvenido a ACS UNMSM</h1>
              <p className="lead">
                ¡Bienvenidos al <strong>ACS International Student Chapter UNMSM</strong>!
                Nos emociona darte la bienvenida a nuestro capítulo estudiantil de la American Chemical Society en la Universidad Nacional Mayor de San Marcos.
                Aquí encontrarás información sobre nuestras actividades, proyectos y oportunidades para crecer junto a una comunidad apasionada por la química.
                Creemos en el aprendizaje continuo y la colaboración, por eso estamos abiertos a escuchar tus ideas, comentarios y sugerencias.
                Si quieres ser parte de este espacio, contribuir con iniciativas o simplemente conocer más sobre nosotros, contáctanos. <br /><br />
                <strong>¡Juntos podemos impulsar la química y generar un impacto positivo!</strong><br /><br />
                <strong>¡Te esperamos! 💙⚗️</strong>
              </p>
              <button
                className="btn btn-primary mt-3"
                style={{ backgroundColor: '#ffd400', color: '#000', border: 'none', fontWeight: 'bold' }}
              >
                Hazte miembro
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
