import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Footer from './components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroCarousel />
        
        <section className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Image 
                  src="/assets/img/main.png"
                  alt="Hero"
                  width={500}
                  height={300}
                  priority
                />
              </div>
              <div className="col-md-6">
                <h1>Hola</h1>
                <p>Descripcion</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}