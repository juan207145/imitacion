import './PorscheHeader.css';

function Porscheheader(){
  return (
    <header className="header-container">
      <div className="header-content">
        {/* Lado Izquierdo: Botón de Menú */}
        <button className="menu-button" aria-label="Abrir menú">
          <span className="menu-icon">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </span>
          <span className="menu-text">Menú</span>
        </button>

        
        <div className="logo-container">
          <h1 className="logo-text">PORSCHE</h1>
        </div>

        
        <div className="header-spacer"></div>
      </div>
    </header>
  );
};

export default Porscheheader;