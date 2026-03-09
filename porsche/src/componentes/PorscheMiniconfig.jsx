import React, { useState } from 'react';
import './PorscheMiniconfig.css';

function PorscheMiniconfig() {
  const opciones = [
    { 
      id: 1, 
      nombre: 'Plata GT', 
      hex: '#bec2c5', 
      img: '/imagenes/porsche-plata.png' 
    },
    { 
      id: 2, 
      nombre: 'Rojo Carmín', 
      hex: '#b00000', 
      img: '/imagenes/Porsche-rojo.png' 
    },
    { 
      id: 3, 
      nombre: 'Negro Jet', 
      hex: '#1a1a1a', 
      img: '/imagenes/porsche-negro.png' 
    }
  ];

  const [seleccionado, setSeleccionado] = useState(opciones[0]);

  return (
    <div className="config-card">
      <h3 className="config-title">Configurador 911</h3>
      
      <div 
        className="config-preview" 
        style={{ backgroundColor: seleccionado.hex }}
      >
        <img 
          key={seleccionado.id} 
          src={seleccionado.img} 
          alt={seleccionado.nombre} 
          className="car-image"
        />
        {/* Nombre del color sobre la caja, como en tu imagen */}
        <span className="color-label-overlay">{seleccionado.nombre}</span>
      </div>

      <div className="color-container">
        {opciones.map((item) => (
          <button
            key={item.id}
            className={`btn-color ${seleccionado.id === item.id ? 'btn-active' : ''}`}
            style={{ backgroundColor: item.hex }}
            onClick={() => setSeleccionado(item)}
            title={item.nombre}
          />
        ))}
      </div>

      <p className="selection-text">
        Seleccionado: <strong>{seleccionado.nombre}</strong>
      </p>
    </div>
  );
}

export default PorscheMiniconfig;