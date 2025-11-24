import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { mockInvoices } from "../../assets/mock_invoices";
import { detectLosses, calculateMetrics, weeklyExpensesData } from "../../utils/analysis";
import "./styles.css";

export default function PerformanceAnalysis() {
  const losses = detectLosses(mockInvoices);
  const metrics = calculateMetrics(mockInvoices, losses);
  const chartData = weeklyExpensesData(mockInvoices);

  return (
    <div className="analysis-container">
      <h2 className="page-title">Análisis de Rendimiento</h2>

      {/* METRIC CARDS */}
      <div className="metrics-row">
        <MetricCard label="Gastos del mes" value={`S/ ${metrics.totalGastos}`} />
        <MetricCard label="Pérdidas detectadas" value={`S/ ${metrics.totalPerdidas}`} />
        <MetricCard label="Productos críticos" value={metrics.productosCriticos} />
      </div>

      {/* CHART */}
      <h3 className="section-title">Gastos por Semana</h3>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#636CCB" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* LOSSES LIST */}
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
    </div>
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
