import React from 'react';

export default function MetricsSection({ metrics }) {
  return (
    <>
      <h2 className="page-title">Resumen Financiero</h2>
      
      <div className="metrics-row">
        <MetricCard label="Ingresos del mes" value={`S/ ${metrics.totalIngresos}`} />
        <MetricCard label="Gastos del mes" value={`S/ ${metrics.totalGastos}`} />
        <MetricCard label="Balance" value={`S/ ${metrics.balance}`} />
      </div>
    </>
  );
}

function MetricCard({ label, value, icon }) {
  return (
    <div className="metric-card">
      <div className="metric-icon">{icon}</div>
      <p className="metric-label">{label}</p>
      <p className="metric-value">{value}</p>
    </div>
  );
}
