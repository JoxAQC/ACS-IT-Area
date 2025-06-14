// components/SponsorsCarousel.js
'use client';

import React, { useEffect, useRef } from 'react';

export default function SponsorsCarousel() {
  const carouselRef = useRef(null);
  
  useEffect(() => {
    const initCarousel = async () => {
      if (!carouselRef.current) return;

      try {
        const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
        if (bootstrap && bootstrap.Carousel) {
          new bootstrap.Carousel(carouselRef.current, {
            interval: 5000,
            ride: 'carousel',
            wrap: true
          });
        }
      } catch (err) {
        console.error('Error al cargar Bootstrap:', err);
      }
    };

    if (document.readyState === 'complete') {
      initCarousel();
    } else {
      window.addEventListener('load', initCarousel);
      return () => window.removeEventListener('load', initCarousel);
    }
  }, []);

  return (
    <section className="container mt-5">
      <div className="position-relative">
        <div 
          id="sponsorsCarousel" 
          ref={carouselRef}
          className="carousel slide sponsors-carousel" 
          data-bs-ride="carousel"
          data-bs-interval="5000"
          data-bs-wrap="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="sponsors-container d-flex justify-content-around h-100">
                <img src="assets/img/s1.png" alt="Sponsor 1" className="h-100" />
                <img src="assets/img/s8.png" alt="Sponsor 2" className="h-100" />
                <img src="assets/img/s3.png" alt="Sponsor 3" className="h-100" />
              </div>
            </div>
            <div className="carousel-item">
              <div className="sponsors-container d-flex justify-content-around h-100">
                <img src="assets/img/s4.png" alt="Sponsor 4" className="h-100" />
                <img src="assets/img/s5.jpg" alt="Sponsor 5" className="h-100" />
                <img src="assets/img/Poderosa.png" alt="Sponsor 14" className="h-100" />
              </div>
            </div>
            <div className="carousel-item">
              <div className="sponsors-container d-flex justify-content-around h-100">
                <img src="assets/img/s7.png" alt="Sponsor 7" className="h-100" />
                <img src="assets/img/s2.png" alt="Sponsor 8" className="h-100" />
                <img src="assets/img/s9.webp" alt="Sponsor 9" className="h-100" />
              </div>
            </div>
            <div className="carousel-item">
              <div className="sponsors-container d-flex justify-content-around h-100">
                <img src="assets/img/s10.png" alt="Sponsor 10" className="h-100" />
                <img src="assets/img/s11.png" alt="Sponsor 11" className="h-100" />
                <img src="assets/img/s12.png" alt="Sponsor 12" className="h-100" />
              </div>
            </div>
            <div className="carousel-item">
              <div className="sponsors-container d-flex justify-content-around h-100">
                <img src="assets/img/s13.png" alt="Sponsor 13" className="h-100" />
                <img src="assets/img/s6.png" alt="Sponsor 6" className="h-100" />
                <img src="assets/img/s14.png" alt="Sponsor 15" className="h-100" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Botones invisibles con funciones invertidas */}
        <button
          className="position-absolute top-0 start-0 h-100 w-20 bg-transparent border-0 p-0"
          type="button"
          data-bs-target="#sponsorsCarousel"
          data-bs-slide="next"
          aria-label="Siguiente"
        />
        <button
          className="position-absolute top-0 end-0 h-100 w-20 bg-transparent border-0 p-0"
          type="button"
          data-bs-target="#sponsorsCarousel"
          data-bs-slide="prev"
          aria-label="Anterior"
        />
      </div>
      
      <style jsx>{`
        .sponsors-carousel {
          height: 200px;
          margin: 0 auto;
          max-width: 100%;
          position: relative;
          overflow: hidden;
        }
        .sponsors-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 100%;
          padding: 0;
        }
        .sponsors-container img {
          height: 100%;
          width: auto;
          max-width: 20%;
          object-fit: contain;
          padding: 10px;
          box-sizing: border-box;
        }
        .carousel-item {
          transition: transform 0.8s ease-in-out; 
          height: 100%;
        }
        .w-20 {
          width: 20%;
        }
        .carousel-inner {
          overflow: hidden;
          text-align: center;
          height: 100%;
        }
        
        /* Dirección a la derecha */
        .carousel-item-next.carousel-item-start,
        .carousel-item-prev.carousel-item-end {
          transform: translateX(0);
        }
        .carousel-item-next,
        .active.carousel-item-end {
          transform: translateX(100%);
        }
        .carousel-item-prev,
        .active.carousel-item-start {
          transform: translateX(-100%);
        }
      `}</style>
    </section>
  );
}