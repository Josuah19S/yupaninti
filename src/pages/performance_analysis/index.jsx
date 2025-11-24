import { mockInvoices } from "@/data/mock_invoices";
import { mockIncome } from "@/data/mock_income";
import { businessBudget } from "@/data/budget";
import { detectLosses, analyzeBudgetPerformance } from "@/utils/analysis";
import "@/styles/performance_analysis.css";
import LossesDetected from "./components/LossesDetected";
import BudgetPerformanceChart from "./components/BudgetPerformanceChart";

export default function PerformanceAnalysis() {
  const losses = detectLosses(mockInvoices);
  const budgetAnalysis = analyzeBudgetPerformance(mockInvoices, mockIncome, businessBudget);

  return (
    <div className="analysis-container">
      <BudgetPerformanceChart analysis={budgetAnalysis} />
      <LossesDetected losses={losses} />
    </div>
  );
}
