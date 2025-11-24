import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/finanzas">Finanzas</Link></li>
          <li><Link to="/analisis-rendimiento">Análisis de Rendimiento</Link></li>
          <li><Link to="/registro-facturas">Registro de Facturas</Link></li>
        </ul>
      </nav>
    </header>
  );
}
