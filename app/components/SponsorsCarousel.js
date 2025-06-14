// components/SponsorsCarousel.js

'use client';

import React, { useEffect } from 'react';

export default function SponsorsCarousel() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.bootstrap) {
      const myCarousel = document.querySelector('#sponsorsCarousel');
      new window.bootstrap.Carousel(myCarousel);
    }
  }, []);

  return (
    <section className="container mt-5">
      <div id="sponsorsCarousel" className="carousel slide sponsors-carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item">
            <div className="sponsors-container d-flex justify-content-around">
              <img src="assets/img/s1.png" alt="Sponsor 1" />
              <img src="assets/img/s8.png" alt="Sponsor 2" />
              <img src="assets/img/s3.png" alt="Sponsor 3" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="sponsors-container d-flex justify-content-around">
              <img src="assets/img/s4.png" alt="Sponsor 4" />
              <img src="assets/img/s5.jpg" alt="Sponsor 5" />
              <img src="assets/img/Poderosa.png" alt="Sponsor 14" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="sponsors-container d-flex justify-content-around">
              <img src="assets/img/s7.png" alt="Sponsor 7" />
              <img src="assets/img/s2.png" alt="Sponsor 8" />
              <img src="assets/img/s9.webp" alt="Sponsor 9" />
            </div>
          </div>
          <div className="carousel-item active">
            <div className="sponsors-container d-flex justify-content-around">
              <img src="assets/img/s10.png" alt="Sponsor 10" />
              <img src="assets/img/s11.png" alt="Sponsor 11" />
              <img src="assets/img/s12.png" alt="Sponsor 12" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="sponsors-container d-flex justify-content-around">
              <img src="assets/img/s13.png" alt="Sponsor 13" />
              <img src="assets/img/s6.png" alt="Sponsor 6" />
              <img src="assets/img/s14.png" alt="Sponsor 15" />
            </div>
          </div>
        </div>

        {/* Flechas ocultas visualmente pero activas */}
        <button
          className="carousel-control-prev visually-hidden"
          type="button"
          data-bs-target="#sponsorsCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next visually-hidden"
          type="button"
          data-bs-target="#sponsorsCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </section>
  );
}
