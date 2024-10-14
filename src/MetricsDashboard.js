import React from 'react';

const MetricsDashboard = () => {
  // Exemplos de dados de métricas
  const metrics = {
    totalBins: 50,
    binsFull: 20,
    totalRoutes: 15,
  };

  return (
    <div>
      <h3>Total de Lixeiras: {metrics.totalBins}</h3>
      <h3>Lixeiras Cheias: {metrics.binsFull}</h3>
      <h3>Total de Rotas: {metrics.totalRoutes}</h3>
    </div>
  );
};

export default MetricsDashboard;
