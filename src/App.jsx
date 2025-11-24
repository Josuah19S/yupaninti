import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Header from './components/header';
import Footer from './components/footer';
import './styles/root.css';
import FloatingWhatsAppButton from './components/floating_button.jsx';
import FinanceOverview from './pages/finance_overview';
import PerformanceAnalysis from './pages/performance_analysis';
import InvoiceRegistry from './pages/invoice_registry';

function App() {
  return (
    <Router>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh' 
      }}>
        <Header />
        <div style={{ 
          marginTop: '80px', 
          marginBottom: '60px',
          flex: 1
        }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/finanzas" element={<FinanceOverview />} />
            <Route path="/analisis-rendimiento" element={<PerformanceAnalysis />} />
            <Route path="/registro-facturas" element={<InvoiceRegistry />} />
          </Routes>
        </div>
        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </Router>
  );
}

export default App
