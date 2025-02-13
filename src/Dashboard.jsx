import React, { useEffect, useState } from 'react';
import { fetchDashboardData } from '../utils/api';

const Dashboard = () => {
  const [data, setData] = useState({
    totalSales: 0,
    accumulatedProfit: 0,
    individualPerformance: []
  });

  useEffect(() => {
    fetchDashboardData().then(data => setData(data));
  }, []);

  return (
    <div className="dashboard">
      <h1>Painel de Controle</h1>
      <div className="stats">
        <div className="stat">
          <h2>Total de Vendas</h2>
          <p>R$ {data.totalSales}</p>
        </div>
        <div className="stat">
          <h2>Lucro Acumulado</h2>
          <p>R$ {data.accumulatedProfit}</p>
        </div>
        <div className="stat">
          <h2>Desempenho Individual</h2>
          <p>Ver detalhes</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;