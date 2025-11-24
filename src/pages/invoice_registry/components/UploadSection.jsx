import React from 'react';

export default function UploadSection({ image, setImage, simulateOCR }) {
  return (
    <>
      <label className="ocr-btn" style={{ cursor: 'pointer' }}>
        Subir comprobante
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={(e) =>
            setImage(URL.createObjectURL(e.target.files[0]))
          }
        />
      </label>

      {image && (
        <div className="upload-card">
          <img src={image} alt="preview" className="preview-img" />
        </div>
      )}

      <button className="ocr-btn" onClick={simulateOCR}>
        Procesar comprobante
      </button>
    </>
  );
}
