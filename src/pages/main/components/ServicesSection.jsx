import React from 'react';
import { Link } from 'react-router-dom';
import financeIcon from '@/assets/finance_icon.svg';
import performanceIcon from '@/assets/performance_icon.svg';
import invoiceIcon from '@/assets/invoice_icon.svg';

export default function ServicesSection() {
  const services = [
    {
      icon: financeIcon,
      title: 'Finanzas',
      description: 'Gestiona y visualiza el panorama general de tus finanzas. Control total de ingresos, gastos y presupuestos.',
      link: '/finanzas'
    },
    {
      icon: performanceIcon,
      title: 'Análisis de Rendimiento',
      description: 'Evalúa el desempeño financiero con métricas clave, tendencias y comparativas de períodos.',
      link: '/analisis-rendimiento'
    },
    {
      icon: invoiceIcon,
      title: 'Registro de Facturas',
      description: 'Administra todas tus facturas en un solo lugar. Registra, consulta y controla tus documentos financieros.',
      link: '/registro-facturas'
    }
  ];

  return (
    <section className="services-section">
      <h2>Nuestros servicios</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <Link key={index} to={service.link} className="service-card">
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
