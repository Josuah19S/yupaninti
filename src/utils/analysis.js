export function detectLosses(invoices) {
  const losses = [];

  // 1. compras duplicadas
  for (let i = 0; i < invoices.length - 1; i++) {
    for (let j = i + 1; j < invoices.length; j++) {
      if (
        invoices[i].proveedor === invoices[j].proveedor &&
        invoices[i].monto === invoices[j].monto &&
        invoices[i].fecha === invoices[j].fecha
      ) {
        losses.push({
          tipo: "Compra duplicada",
          mensaje: `Compra duplicada con ${invoices[i].proveedor}`,
          perdida: invoices[i].monto,
        });
      }
    }
  }

  // 2. Gastos altos (mock)
  invoices.forEach((inv) => {
    if (inv.monto > 100) {
      losses.push({
        tipo: "Gasto elevado",
        mensaje: `Gasto fuera de patrón con ${inv.proveedor}`,
        perdida: (inv.monto * 0.1).toFixed(2),
      });
    }
  });

  return losses;
}

export function calculateMetrics(invoices, losses) {
  const totalGastos = invoices.reduce((acc, p) => acc + p.monto, 0).toFixed(2);
  const totalPerdidas = losses.reduce((acc, p) => acc + Number(p.perdida), 0).toFixed(2);

  return {
    totalGastos,
    totalPerdidas,
    productosCriticos: 3, // mock
  };
}

export function weeklyExpensesData(invoices) {
  const weeks = {};

  invoices.forEach(inv => {
    const week = Math.ceil(parseInt(inv.fecha.split("-")[2]) / 7);
    if (!weeks[week]) weeks[week] = 0;
    weeks[week] += parseFloat(inv.monto);
  });

  return Object.entries(weeks).map(([week, monto]) => ({
    name: `Semana ${week}`,
    total: monto
  }));
}

export function weeklyIncomeData(incomes) {
  const weeks = {};

  incomes.forEach(inc => {
    const week = Math.ceil(parseInt(inc.fecha.split("-")[2]) / 7);
    if (!weeks[week]) weeks[week] = 0;
    weeks[week] += parseFloat(inc.monto);
  });

  return Object.entries(weeks).map(([week, monto]) => ({
    name: `Semana ${week}`,
    total: monto
  }));
}

export function analyzeBudgetPerformance(invoices, incomes, budget) {
  const totalGastos = invoices.reduce((acc, inv) => acc + inv.monto, 0);
  const totalIngresos = incomes.reduce((acc, inc) => acc + inc.monto, 0);
  
  const gastosVsBudget = ((totalGastos / budget.presupuestoGastos) * 100).toFixed(1);
  const ingresosVsBudget = ((totalIngresos / budget.presupuestoIngresos) * 100).toFixed(1);
  
  const excedeGastos = totalGastos > budget.presupuestoGastos;
  const cumpleIngresos = totalIngresos >= budget.presupuestoIngresos;
  
  let status = "";
  let mensaje = "";
  
  if (!excedeGastos && cumpleIngresos) {
    status = "Excelente";
    mensaje = "El negocio está cumpliendo con las metas. Los gastos están controlados y los ingresos superan lo esperado.";
  } else if (excedeGastos && cumpleIngresos) {
    status = "Moderado";
    mensaje = "Aunque los ingresos son buenos, los gastos están excediendo el presupuesto. Se recomienda optimizar costos.";
  } else if (!excedeGastos && !cumpleIngresos) {
    status = "Atención";
    mensaje = "Los gastos están bajo control, pero los ingresos no alcanzan la meta. Se necesita mejorar las ventas.";
  } else {
    status = "Crítico";
    mensaje = "Los gastos superan el presupuesto y los ingresos están por debajo de la meta. Requiere acción inmediata.";
  }
  
  return {
    totalGastos: totalGastos.toFixed(2),
    totalIngresos: totalIngresos.toFixed(2),
    gastosVsBudget,
    ingresosVsBudget,
    status,
    mensaje,
    excedeGastos,
    cumpleIngresos,
    chartData: [
      {
        categoria: "Gastos",
        Real: parseFloat(totalGastos.toFixed(2)),
        Presupuesto: budget.presupuestoGastos
      },
      {
        categoria: "Ingresos",
        Real: parseFloat(totalIngresos.toFixed(2)),
        Presupuesto: budget.presupuestoIngresos
      }
    ]
  };
}
