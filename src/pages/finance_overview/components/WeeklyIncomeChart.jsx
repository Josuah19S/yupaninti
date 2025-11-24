import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function WeeklyIncomeChart({ chartData }) {
  return (
    <>
      <h3 className="section-title">Ingresos semanales</h3>
      <div className="chart-card">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#28a745" name="Ingresos (S/)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
