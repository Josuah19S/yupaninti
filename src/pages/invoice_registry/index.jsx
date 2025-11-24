import { useState } from "react";
import { mockInvoices } from "../../assets/mock_invoices";
import "./styles.css";

export default function InvoiceRegistry() {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    proveedor: "",
    ruc: "",
    fecha: "",
    monto: "",
    producto: "",
  });

  const simulateOCR = () => {
    const random =
      mockInvoices[Math.floor(Math.random() * mockInvoices.length)];
    setFormData(random);
  };

  return (
    <div className="invoice-container">
      <h2 className="page-title">Registro de Comprobantes</h2>

      {/* UPLOAD CARD */}
      <div className="upload-card">
        <label className="upload-btn">
          <span>Subir comprobante</span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImage(URL.createObjectURL(e.target.files[0]))
            }
          />
        </label>

        {image && <img src={image} alt="preview" className="preview-img" />}
      </div>

      {/* OCR BUTTON */}
      <button className="ocr-btn" onClick={simulateOCR}>
        Procesar comprobante
      </button>

      {/* OCR RESULT */}
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
    </div>
  );
}
