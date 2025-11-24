import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to="/" className="header-logo">
          <h1>Yupaninti</h1>
        </Link>
        <nav className="header-nav">
          <Link to="/finanzas" className="nav-link">Finanzas</Link>
          <Link to="/analisis-rendimiento" className="nav-link">Análisis de Rendimiento</Link>
          <Link to="/registro-facturas" className="nav-link">Registro de Facturas</Link>
        </nav>
      </div>
    </header>
  );
}
