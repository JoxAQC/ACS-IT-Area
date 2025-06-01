'use client';
import Image from 'next/image';

const slides = [
  {
    image: '/assets/img/000643421W.jpg',
    title: {
      es: 'Súmate a la comunidad química más activa de San Marcos',
      en: 'Join the most active chemistry community at San Marcos'
    }
  },
  {
    image: 'https://images.pexels.com/photos/1366942/pexels-photo-1366942.jpeg',
    title: {
      es: 'Desde San Marcos para el mundo: química con propósito',
      en: 'From San Marcos to the world: chemistry with purpose'
    }
  }
  // Agrega más slides según sea necesario
];

export default function HeroCarousel() {
  return (
    <section className="container-fluid p-0">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="position-relative" style={{ height: '85vh' }}>
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="d-block object-cover"
                  style={{ filter: 'brightness(60%)' }}
                  priority={index === 0}
                />
                <div className="carousel-caption position-absolute top-50 start-50 translate-middle text-center w-60">
                  <h1>{slide.title.es}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
