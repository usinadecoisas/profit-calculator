import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { fetchProfitHistory } from '../utils/api';

const ProfitHistory = () => {
  const [profitData, setProfitData] = useState([]);

  useEffect(() => {
    fetchProfitHistory().then(data => setProfitData(data));
  }, []);

  const barData = {
    labels: profitData.map(item => item.date),
    datasets: [
      {
        label: 'Lucro Bruto',
        data: profitData.map(item => item.grossProfit),
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      },
      {
        label: 'Lucro Líquido',
        data: profitData.map(item => item.netProfit),
        backgroundColor: 'rgba(153, 102, 255, 0.6)'
      }
    ]
  };

  const lineData = {
    labels: profitData.map(item => item.date),
    datasets: [
      {
        label: 'Margem de Lucro',
        data: profitData.map(item => item.profitMargin),
        fill: false,
        borderColor: 'rgba(255, 99, 132, 0.6)'
      }
    ]
  };

  return (
    <div className="profit-history">
      <Bar data={barData} />
      <Line data={lineData} />
    </div>
  );
};

export default ProfitHistory;