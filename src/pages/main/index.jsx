import React from 'react';
import '@/styles/main.css';
import ServicesSection from './components/ServicesSection';

export default function Main() {
  return (
    <main>
      <h1>Bienvenido a Yupaninti</h1>
      <p>Sistema de gestión financiera</p>
      <ServicesSection />
    </main>
  );
}
