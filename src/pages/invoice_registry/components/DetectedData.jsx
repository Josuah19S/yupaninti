import React from 'react';

export default function DetectedData({ formData }) {
  return (
    <div className="result-card">
      <h3>Datos detectados</h3>

      <div className="form-grid">
        <div>
          <label>Proveedor</label>
          <input value={formData.proveedor} readOnly />
        </div>

        <div>
          <label>RUC</label>
          <input value={formData.ruc} readOnly />
        </div>

        <div>
          <label>Fecha</label>
          <input value={formData.fecha} readOnly />
        </div>

        <div>
          <label>Monto</label>
          <input value={formData.monto} readOnly />
        </div>

        <div className="full-width">
          <label>Producto</label>
          <input value={formData.producto} readOnly />
        </div>
      </div>
    </div>
  );
}
