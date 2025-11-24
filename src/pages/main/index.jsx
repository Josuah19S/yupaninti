import React from 'react';
import '@/styles/main.css';
import ServicesSection from './components/ServicesSection';
import mainImage from '@/assets/hero-image.webp';

export default function Main() {
  return (
    <main>
      <div className="main-hero">
        <img src={mainImage} alt="Main" className="main-image" />
        <div className="main-content">
          <h1>Bienvenido a Yupaninti</h1>
          <p>Sistema de gestión financiera</p>
        </div>
      </div>
      <ServicesSection />
    </main>
  );
}
