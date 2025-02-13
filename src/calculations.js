export const calculateGrossProfit = (cost, price) => {
  return price - cost;
};

export const calculateNetProfit = (grossProfit, taxes, additionalCosts) => {
  return grossProfit - taxes - additionalCosts;
};

export const calculateProfitMargin = (netProfit, price) => {
  return (netProfit / price) * 100;
};