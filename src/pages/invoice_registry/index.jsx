import { useState } from "react";
import { mockInvoices } from "@/data/mock_invoices";
import "@/styles/invoice_registry.css";
import UploadSection from "./components/UploadSection";
import DetectedData from "./components/DetectedData";

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

      <UploadSection 
        image={image} 
        setImage={setImage} 
        simulateOCR={simulateOCR} 
      />

      <DetectedData formData={formData} />
    </div>
  );
}
