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
