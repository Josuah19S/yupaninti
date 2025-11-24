import React from 'react';

export default function LossesDetected({ losses }) {
  return (
    <>
      <h3 className="section-title">Pérdidas invisibles detectadas</h3>

      <div className="losses-card">
        {losses.map((l, i) => (
          <div key={i} className="loss-item">
            <span className="loss-icon"></span>
            <div className="loss-text">
              <p className="loss-msg">{l.mensaje}</p>
              <p className="loss-sub">
                Pérdida estimada: <strong>S/ {l.perdida}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
