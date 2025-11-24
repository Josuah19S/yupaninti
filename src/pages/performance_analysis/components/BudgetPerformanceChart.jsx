import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BudgetPerformanceChart({ analysis }) {
  const getStatusColor = (status) => {
    switch(status) {
      case "Excelente": return "#28a745";
      case "Moderado": return "#ffc107";
      case "Atención": return "#ff9800";
      case "Crítico": return "#dc3545";
      default: return "#6c757d";
    }
  };

  return (
    <>
      <h3 className="section-title">Análisis de Presupuesto</h3>
      
      <div className="budget-analysis-card">
        <div className="budget-status" style={{ borderLeftColor: getStatusColor(analysis.status) }}>
          <h4 className="status-title">Estado: <span style={{ color: getStatusColor(analysis.status) }}>{analysis.status}</span></h4>
          <p className="status-message">{analysis.mensaje}</p>
        </div>

        <div className="budget-metrics">
          <div className="budget-metric">
            <span className="budget-label">Gastos vs Presupuesto:</span>
            <span className={`budget-value ${analysis.excedeGastos ? 'exceeded' : 'within'}`}>
              {analysis.gastosVsBudget}%
            </span>
          </div>
          <div className="budget-metric">
            <span className="budget-label">Ingresos vs Meta:</span>
            <span className={`budget-value ${analysis.cumpleIngresos ? 'within' : 'exceeded'}`}>
              {analysis.ingresosVsBudget}%
            </span>
          </div>
        </div>

        <div className="chart-card">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analysis.chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="categoria" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Real" fill="#6e8cfb" name="Real (S/)" />
              <Bar dataKey="Presupuesto" fill="#82ca9d" name="Presupuesto (S/)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
