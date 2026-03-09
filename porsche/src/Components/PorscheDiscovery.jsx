import React from 'react';
import './PorscheDiscovery.css';

const cards = [
  {
    title: "Porsche E-Performance",
    image: "/imagenes/1.jpg",
  },
  {
    title: "Porsche Tequipment",
    image: "/imagenes/2.jpeg",
  },
  {
    title: "E-Performance - Movilidad sostenible",
    image: "/imagenes/3.jpg",
  }
];

const PorscheDiscovery = () => {
  return (
    <section className="porsche-section">
      <h2 className="section-title">Descubra más sobre Porsche</h2>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="porsche-card">
            <div className="image-wrapper">
              <img src={card.image} alt={card.title} className="card-image" />
            </div>
            <div className="card-overlay">
              <span className="card-text">{card.title}</span>
              <span className="card-arrow">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PorscheDiscovery;