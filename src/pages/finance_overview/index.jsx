import { mockInvoices } from "@/data/mock_invoices";
import { mockIncome } from "@/data/mock_income";
import { calculateMetrics, weeklyExpensesData, weeklyIncomeData } from "@/utils/analysis";
import "@/styles/performance_analysis.css";
import MetricsSection from "./components/MetricsSection";
import WeeklyExpensesChart from "./components/WeeklyExpensesChart";
import WeeklyIncomeChart from "./components/WeeklyIncomeChart";

export default function FinanceOverview() {
  const losses = [];
  const expensesMetrics = calculateMetrics(mockInvoices, losses);
  const totalIngresos = mockIncome.reduce((acc, inc) => acc + inc.monto, 0).toFixed(2);
  const balance = (totalIngresos - expensesMetrics.totalGastos).toFixed(2);
  
  const metrics = {
    ...expensesMetrics,
    totalIngresos,
    balance
  };
  
  const expensesChartData = weeklyExpensesData(mockInvoices);
  const incomeChartData = weeklyIncomeData(mockIncome);

  return (
    <div className="analysis-container">
      <MetricsSection metrics={metrics} />
      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        <div style={{ flex: 1 }}>
          <WeeklyExpensesChart chartData={expensesChartData} />
        </div>
        <div style={{ flex: 1 }}>
          <WeeklyIncomeChart chartData={incomeChartData} />
        </div>
      </div>
    </div>
  );
}
